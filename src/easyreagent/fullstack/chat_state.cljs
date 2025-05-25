(ns easyreagent.fullstack.chat-state
  (:require [reagent.core :as r]
            [easyreagent.util :as er-util]))


(def all-messages
  (r/atom {}))

(defn get-socket-url []
  (let [connection-type (if (.startsWith (.-host js/location) "localhost")
                          "ws://"
                          "wss://")
        socket-url (str connection-type (.-host js/location)
                        "/easyreagent/fullstack/chat/ws")]
    socket-url))
;; (er-util/read-json-keywordize (.-data zz))
(defn connect-web-socket [chat-id]
  (when-let [chan (js/WebSocket. (get-socket-url))]
    ;; (def x11 chan)
    (set! (.-onopen chan)
          (fn [] (.send chan (er-util/write-json {:chat-id chat-id}))
            (js/setInterval #(.send chan "beat") 5000)))
    (swap! all-messages assoc-in
           [chat-id :socket] chan)
    (set! (.-onmessage chan)
          (fn [msg]
            (def zz msg)
            (swap! all-messages
                   update-in
                   [chat-id :messages]
                   conj
                   (er-util/read-json-keywordize (.-data msg)))))
    ))

(defn fetch-messages [chat-id]
  (er-util/post-request
   "/easyreagent/fullstack/chat/getConversationMessages"
   {:chat-id chat-id}
   :json-response #(swap! all-messages assoc
                          chat-id %)
   :failure #(js/alert "failed to load chat messages"))
  (connect-web-socket chat-id))

(def fetch-messages-once (memoize fetch-messages))



(defn send-message [chat-id message & {:keys [callback]}]
  (er-util/post-request
   "/easyreagent/fullstack/chat/sendNewMessage"
   {:chat-id chat-id
    :message-contents message}
   :success (or callback identity)
   :failure #(js/alert (str "message failed to send" %))))
