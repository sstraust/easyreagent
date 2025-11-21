(ns easyreagentserver.fullstack.gpt
  (:require
   [clojure.data.json :as json]
   [compojure.core :refer [context defroutes GET]]
   [easyreagentserver.fullstack.config :as config]
   [environ.core :refer [env]]
   [ring.websocket :as ws]
   [wkok.openai-clojure.api :as api]))

;; for documentation only.
;;   these Malli types are not enforced
(def SocketMessage
  [:map
   [:prompt-input :string]])

(def PromptEndpoint
  [:map
   [:system-prompt :string]
   [:custom-handler
    [:=> [:cat :socket SocketMessage] nil]]])
          
(config/create-component-config
 :gpt
 prompt-endpoints {:default-value {"default" {}}})

(def openai-api-key (:openai-api-key env))


(defn start-streaming-gpt [socket message params]
  (let [prompt-input (:prompt-input message)
        message-history (:message-history message)
        prompt-endpoint-name (or (:prompt-endpoint message) "default")
        prompt-endpoint (get @prompt-endpoints prompt-endpoint-name)
        curr-index (atom 0)]
    (def m message)
    (def message-hist (concat
                          [{:role "system" :content (or (:system-prompt prompt-endpoint) "")}]
                          (map (fn [x] {:role "user" :content x}) message-history)
                          [{:role "user" :content prompt-input}]))
    (if (:custom-handler prompt-endpoint)
      ((:custom-handler prompt-endpoint)
       socket message params)
      (api/create-chat-completion
       {:model "gpt-4o"
        :messages (concat
                   [{:role "system" :content (or (:system-prompt prompt-endpoint) "")}]
                   (map (fn [x] {:role "user" :content x}) message-history)
                   [{:role "user" :content prompt-input}])
        :stream true
        :on-next (fn [x] (do
                           (ws/send socket
                                    (json/write-str
                                     {:token (:content (:delta (first (:choices x))))
                                      :index @curr-index}))
                           (swap! curr-index inc)))}
       {:api-key openai-api-key}))))


(defn process-gpt-socket-message [params]
  (fn [socket message]
  (cond
    (= message "exit")
    (ws/close socket)

    (= message "heartbeat")
    nil

    :else
    (let [socket-request (clojure.walk/keywordize-keys (json/read-str message))]
      (case (keyword (:socket-method socket-request))
        :streaming-gpt-request (start-streaming-gpt socket socket-request params)
        :else (println message))))))

(defn setup-socket [params]
  (def mm params)
  {::ws/listener
   {:on-open
    (fn [socket]
      (println "connected websocket!!"))
    :on-message (process-gpt-socket-message params)}})

(defroutes gpt-response-routes
  (context "/easyreagent/fullstack/gpt" []
           (GET "/gptAPI/ws" params (setup-socket params))))



