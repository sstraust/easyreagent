(ns easyreagentserver.fullstack.chat
  (:require [monger.core :as mg]
            [monger.query :as mq]
            [easyreagentserver.core :as er-server]
            [monger.collection :as mc]
            [ring.websocket :as ws]
            [clojure.string]
            [compojure.core :refer [context defroutes GET POST]]
            [easyreagentserver.fullstack.db :refer [db conn]]
            [clojure.data.json :as json]))



(def messages-table (atom "easyreagent-messages"))

(defn get-chat-type [chat-id]
  (keyword (second (re-find #"(.*?)-" chat-id))))
 

(derive ::write ::any)
(derive ::read ::any)
(derive ::unspecified ::any)
(defn has-permissions-identifier [chat-id user & {:keys [request-type] :as opts}]
  (println "hi")
  (println opts)
  (println request-type)
  (println [(get-chat-type chat-id) (or request-type ::unspecified)])
  [(get-chat-type chat-id) (or request-type ::unspecified)])
(defmulti has-permission? has-permissions-identifier)


(comment
  (defn has-permissions-identifier [chat-id user & {:keys [r] :as opts}]
    
    [chat-id user r opts])
  (has-permissions-identifier "hi" "hi" {:r ::read})
  )

(defmethod has-permission? :default [chat-id user & {:as opts}]
  (println (str "default has permissions" chat-id user opts))
  true)


(defn get-conversation-messages
  [{{:keys [chat-id]} :params er-session-user :er-session-user}]
  (if (not (has-permission? chat-id er-session-user {:request-type ::read}))
    (er-server/failure-response "user does not have permissions to view this chat")
    (er-server/json-response
     (dissoc
      (mc/find-one-as-map
       @db @messages-table
       {:chat-id chat-id})
      :_id))))


(comment
  (map :chat-id
       (mc/find-maps
        @db @messages-table))

  )

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
  [{{:keys [chat-id message-contents]} :params :as params er-session-user :er-session-user}]
  (println params)
  (println(has-permission? chat-id er-session-user {:request-type ::write})) 
  (if-not (has-permission? chat-id er-session-user {:request-type ::write})
    (er-server/failure-response)
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
      (er-server/failure-response "failed to update messages table")))))

;; chat id -> list of sockets
;; now you need to close the socket
;; and also understand/not send when sockets are closed
(defn register-chat-responder [socket message params]
  (cond
    (= message "exit")
    (do (ws/close socket)
        (remove-socket socket))
    (= message "beat")
    "hi"
    :else
    (let [chat-id (:chat-id (clojure.walk/keywordize-keys
                             (json/read-str message)))]
      (if-not (has-permission? chat-id (:er-session-user params) {:request-type ::read})
        nil
      (dosync
       (alter active-sockets assoc socket chat-id)
       (alter active-chats
            update chat-id
            (fnil conj #{}) socket))))))
          
(defn setup-socket [params]
  {::ws/listener
   {:on-open
    (fn [socket] nil)
    :on-message (fn [socket message] (register-chat-responder socket message params))
    :on-close (fn [socket status-code reason]
                (let [chat-id (get @active-sockets socket)]
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
   
