(ns easyreagentserver.fullstack.chat
  (:require [monger.core :as mg]
            [monger.query :as mq]
            [easyreagentserver.core :as er-server]
            [monger.collection :as mc]
            [ring.websocket :as ws]
            [compojure.core :refer [context defroutes GET POST]]
            [easyreagentserver.fullstack.db :refer [db conn]]
            [clojure.data.json :as json]))


(def messages-table (atom "easyreagent-messages"))

(defn get-conversation-messages
  [{{:keys [chat-id]} :params}]
  (def mm chat-id)
  (er-server/json-response
   (dissoc
    (mc/find-one-as-map
     @db @messages-table
     {:chat-id chat-id})
    :_id)))



(def active-chats (ref {}))
(def active-sockets (ref {}))


(defn remove-socket [socket]
  (try
    (let [chat-id (get @active-sockets socket)]
                  (dosync 
                   (alter active-sockets dissoc socket)
                   (alter active-chats update chat-id
                          (partial remove #(= % socket)))))
    (catch Exception e nil)))

(defn update-existing-websockets [chat-id message]
  (doseq [socket (get @active-chats chat-id)]
    (try 
      (ws/send socket message)
      (catch Exception e (println e)))))

(defn send-new-message
  [{{:keys [chat-id message-contents]} :params :as params}]
  (try
    (let [message-data {:title message-contents}]
    (if-let [update-result
             (mc/update
              @db @messages-table
              {:chat-id chat-id}
              {"$push" {:messages message-data}}
              {:multi false
               :upsert true})]
      (do
        (update-existing-websockets
         chat-id (json/write-str message-data))
        (er-server/success-response)
        )
      (er-server/failure-response "failed to update messages table")))
    (catch Exception e
      (er-server/failure-response "failed to update messages table"))
    ))

;; chat id -> list of sockets
;; now you need to close the socket
;; and also understand/not send when sockets are closed
(defn register-chat-responder [socket message]
  (cond
    (= message "exit")
    (do (ws/close socket)
        (remove-socket socket))
    (= message "beat")
    "hi"
    :else
    (let [chat-id (:chat-id (clojure.walk/keywordize-keys
                             (json/read-str message)))]
      (dosync
       (alter active-sockets assoc socket chat-id)
       (alter active-chats
            update chat-id
            (fnil conj #{}) socket)))))
          
(defn setup-socket [params]
  {::ws/listener
   {:on-open
    (fn [socket] nil)
    :on-message register-chat-responder
    :on-close (fn [socket status-code reason]
                (let [chat-id (get @active-sockets socket)]
                  (println "onclose called for : " (str chat-id))
                  (dosync 
                   (alter active-sockets dissoc socket)
                   (alter active-chats update chat-id
                         (partial remove #(= % socket))))))
    }})


    
(defroutes chat-routes
  (context
      "/easyreagent/fullstack/chat" []
    (GET "/ws" params (setup-socket params))
    (POST "/getConversationMessages" params
      (get-conversation-messages params))
    (POST "/sendNewMessage" params
          (send-new-message params))))
             
             
(comment
  (mc/find-one-as-map
   @db @messages-table {})
  ;; now I need to update active chats
  ;; and then verify
  )
   
