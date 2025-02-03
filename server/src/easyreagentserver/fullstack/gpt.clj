(ns easyreagentserver.fullstack.gpt
  (:require [environ.core :refer [env]]
            [wkok.openai-clojure.api :as api]
            [compojure.core :refer [context defroutes GET POST]]
            [clojure.data.json :as json]
            [ring.websocket :as ws]))

(def openai-api-key (:openai-api-key env))

(defn start-streaming-gpt [socket message]
  (let [prompt-input (:prompt-input message)
        curr-index (atom 0)]
    (api/create-chat-completion
     {:model "gpt-4o"
      :messages [{:role "user" :content prompt-input}]
      :stream true
      :on-next (fn [x] (do
                         (ws/send socket
                                  (json/write-str
                                   {:token (:content (:delta (first (:choices x))))
                                    :index @curr-index}))
                         (swap! curr-index inc)))}
     {:api-key openai-api-key})))
;; (println (api/list-models {:api-key openai-api-key}))

(defn process-gpt-socket-message [socket message]
  (if (= message "exit")
    (ws/close socket)
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



