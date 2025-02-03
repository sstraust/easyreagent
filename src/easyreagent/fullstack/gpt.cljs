(ns easyreagent.fullstack.gpt
  (:require
   [easyreagent.util :refer [Renderable]]
   [easyreagent.components :as er]
   ["react-markdown$default" :as Markdown]
   ["framer-motion" :refer [AnimatePresence motion]]
   [clojure.string :as string]
   [reagent.core :as r]))

(defprotocol Message
  (message-text [this]))

(defrecord UserMessage [message-content]
  Message
  (message-text [this] message-content)
  Renderable
  (render [this]
    [:p message-content]))

;; when the socket is reset, who owns that transition?
;; I think GPTChat has to own it, so that there is a single source of control
;; maybe it should be one socket per message?
;; that way you make sure it doesnt shit itself?
(defrecord GPTMessage [options tokens-list-atom]
  Message
  (message-text [this]
    (string/join "" @tokens-list-atom))
  Renderable
  (render [this]
    (cond
      (empty? @tokens-list-atom)
      [:> Markdown
       {:className "markdown"}
       "Your results will show up here"]

      (not (:extra-formatting options))
      [:> Markdown
       {:className "markdown"}
       (message-text this)]

      :else
      ((:extra-formatting options)
       (message-text this)))))
    

(defn get-socket-url []
  (str
   (if (= js/mode "dev") "ws://" "wss://")
   (.-host js/location) "/easyreagent/fullstack/gpt/gptAPI/ws"))



(defn create-gpt-socket [curr-result-tokens on-complete]
  (let [socket-url (get-socket-url)]
    (when-let [chan (js/WebSocket. socket-url)]
      (set! (.-onmessage chan)
            (fn [msg]
              (let [msg-map (js->clj (.parse js/JSON (.-data msg)) :keywordize-keys true)]
                (swap! curr-result-tokens conj (:token msg-map))
                (when (not (:token msg-map))
                  (on-complete)))))
      chan)))

(defn get-gpt-results-streaming [socket prompt]
  (.addEventListener
   socket "open"
   (fn [event]
     (.send socket
            (.stringify js/JSON
                        (clj->js {:socket-method :streaming-gpt-request
                                  :prompt-input prompt}))))))

(defn make-gpt-message [options prompt]
  (let [tokens-list-atom (r/atom [])
        socket (create-gpt-socket tokens-list-atom (:on-complete options))]
    (get-gpt-results-streaming socket prompt)
    (GPTMessage. options tokens-list-atom)))

(comment
  (def zz (r/atom []))

  (swap! zz conj 1)
  )
(defn submit-chat [{:keys [message-history-atom input-atom]}]
  (swap! message-history-atom
         conj
         (UserMessage. @input-atom))
  (swap! message-history-atom
         conj
         (make-gpt-message nil @input-atom))
  (reset! input-atom ""))

(defn gpt-input-box [gpt-chat]
  [:div.form-control.w-full.mx-auto.mb-4
   [:div.flex.items-stretch
    [er/text-area {:class "input input-bordered h-full max-h-none"
                   :style {:line-height "1.5rem"}
                   :on-enter (fn [] (submit-chat gpt-chat))}
     (:input-atom gpt-chat)]
    [:button.btn.btn-primary.btn-md
     {:on-click (fn [] (submit-chat gpt-chat))}]]])

(defrecord GPTChat [message-history-atom input-atom]
  Renderable
  (render [this]
    [:v-box.easyreagent-fullstack-gpt-gptchat
     [:> AnimatePresence
      {:transition-key @message-history-atom}
      (when @message-history-atom
        (for [message @message-history-atom]
          [easyreagent.util/render message]))]
     [gpt-input-box this]]))

