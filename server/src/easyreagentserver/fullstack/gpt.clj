(ns easyreagentserver.fullstack.gpt
  (:require
   [clojure.data.json :as json]
   [compojure.core :refer [context defroutes GET]]
   [easyreagentserver.fullstack.config :as config]
   [environ.core :refer [env]]
   [ring.websocket :as ws]
   [wkok.openai-clojure.api :as api]))


(config/create-component-config
 :gpt
 prompt-endpoints {:default-value
                   {"default" {:system-prompt ""}}})

(def openai-api-key (:openai-api-key env))


;; then when you start streaming gpt
;; you have the endpoint as an input option
;; and then for the appropriate endpoint
;; you call the query with the appropriate system prompt
(defn start-streaming-gpt [socket message]
  (let [prompt-input (:prompt-input message)
        prompt-endpoint-name (or (:prompt-endpoint message) "default")
        prompt-endpoint (get @prompt-endpoints prompt-endpoint-name)
        curr-index (atom 0)]
    (if (:custom-handler prompt-endpoint)
      ((:custom-handler prompt-endpoint)
       socket message)
      (api/create-chat-completion
       {:model "gpt-4o"
        :messages [{:role "system" :content (:system-prompt prompt-endpoint)}
                   {:role "user" :content prompt-input}]
        :stream true
        :on-next (fn [x] (do
                           (ws/send socket
                                    (json/write-str
                                     {:token (:content (:delta (first (:choices x))))
                                      :index @curr-index}))
                           (swap! curr-index inc)))}
       {:api-key openai-api-key}))))



;; (println (api/list-models {:api-key openai-api-key}))

(defn process-gpt-socket-message [socket message]
  (cond
    (= message "exit")
    (ws/close socket)

    (= message "heartbeat")
    nil

    :else
    (let [socket-request (clojure.walk/keywordize-keys (json/read-str message))]
      (case (keyword (:socket-method socket-request))
        :streaming-gpt-request (start-streaming-gpt socket socket-request)
        :else (println message)))))

(defn setup-socket [params]
  {::ws/listener
   {:on-open
    (fn [socket]
      (println "connected websocket!!"))
    :on-message process-gpt-socket-message}})

(defroutes gpt-response-routes
  (context "/easyreagent/fullstack/gpt" []
           (GET "/gptAPI/ws" params (setup-socket params))))



