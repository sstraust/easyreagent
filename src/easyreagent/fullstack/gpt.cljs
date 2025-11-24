(ns easyreagent.fullstack.gpt
  (:require
   [easyreagent.util :refer [Renderable]]
   [easyreagent.components :as er]
   ["react-markdown$default" :as Markdown]
   ["framer-motion" :refer [AnimatePresence motion]]
   ["lucide-react" :refer [Send]]
   [clojure.string :as string]
   [reagent.core :as r]))

(defprotocol Message
  (message-text [this])
  (message-with-debugtext [this]))

(defrecord UserMessage [message-content]
  Message
  (message-text [this] message-content)
  (message-with-debugtext [this] message-content)
  Renderable
  (render [this]
    [:h-box [:p.mr-4 {:class "text-base-content/80"} "> "] [:p message-content]]))


(defn start-streaming-text [input-text output-text-atom speed]
  (let [text-tokens (atom (string/split input-text #" "))
        interval-id (atom nil)]
    (reset! interval-id
            (js/setInterval
             (fn []
               (swap! output-text-atom
                      str (first @text-tokens) " ")
               (swap! text-tokens rest)
               (when (empty? @text-tokens)
                 (js/clearInterval @interval-id)))
             speed))))

(defn ^:public-api show-text-streaming [input-text speed]
  (let [output-text-atom (r/atom "")]
    (start-streaming-text input-text output-text-atom speed)
    (fn [input-text speed]
      [:p @output-text-atom])))
      
    

;; when the socket is reset, who owns that transition?
;; I think GPTChat has to own it, so that there is a single source of control
;; maybe it should be one socket per message?
;; that way you make sure it doesnt shit itself?
(defrecord GPTMessage [options tokens-list-atom non-text-responses-atom]
  Message
  (message-text [this]
    (string/join "" @tokens-list-atom))
  (message-with-debugtext [this]
    (apply str
           (concat
            (map #(str % "\n\n") @non-text-responses-atom)
            [(message-text this)])))
  Renderable
  (render [this]
    (cond
      (and (empty? @tokens-list-atom)
           (empty? @non-text-responses-atom))
      [:> Markdown
       {:className "markdown"}
       "Your results will show up here"]

      (:custom-display options)
      ((:custom-display options)
       this)

      (not (:extra-formatting options))
      [:> Markdown
       {:className "markdown"}
       (message-with-debugtext this)]
      
      :else
      ((:extra-formatting options)
       (message-text this)))))
    

(defn get-socket-url []
  (str
   (if (= js/mode "dev") "ws://" "wss://")
   (.-host js/location) "/easyreagent/fullstack/gpt/gptAPI/ws"))



(defn create-gpt-socket [message-object on-complete]
  (let [socket-url (get-socket-url)
        curr-result-tokens (:tokens-list-atom message-object)]
    (when-let [chan (js/WebSocket. socket-url)]
      (set! (.-onmessage chan)
            (fn [msg]
              (let [msg-map (js->clj (.parse js/JSON (.-data msg)) :keywordize-keys true)]
                (when (= (:type msg-map) "tool_called")
                  (swap! (:non-text-responses-atom message-object)
                         conj
                         (select-keys msg-map [:tool_name :arguments])))
                (when (not (or (= (:type msg-map) "heartbeat")
                               (= (:type msg-map) "tool_called")))
                  (swap! curr-result-tokens conj (:token msg-map))
                  (when (not (:token msg-map))
                    (on-complete))))))
      chan)))

(defn get-gpt-results-streaming [socket prompt prompt-endpoint gpt-chat]
  (.addEventListener
   socket "open"
   (fn [event]
     (.send socket
            (.stringify js/JSON
                        (clj->js {:socket-method :streaming-gpt-request
                                  :prompt-input prompt
                                  :extra-message-data (:extra-message-data (:chat-options gpt-chat))
                                  :message-history (map message-with-debugtext @(:message-history-atom gpt-chat))
                                  :prompt-endpoint prompt-endpoint}))))))

(defn make-gpt-message [options prompt prompt-endpoint gpt-chat]

  (let [gpt-message (GPTMessage. options (r/atom []) (r/atom []))
        socket (create-gpt-socket gpt-message (:on-complete options))]
    ;; send a heartbeat every 3 seconds
    (js/setInterval (fn [] (.send socket "heartbeat")) 3000)
    (get-gpt-results-streaming socket prompt prompt-endpoint gpt-chat)
    gpt-message))


(defn submit-chat [{:keys [message-history-atom input-atom prompt-endpoint chat-options] :as gpt-chat}]
  (swap! message-history-atom
         conj
         (UserMessage. @input-atom))
  (swap! message-history-atom
         conj
         (make-gpt-message chat-options @input-atom prompt-endpoint gpt-chat))
  (reset! input-atom ""))

(defn gpt-input-box [gpt-chat]
  [:div.form-control.w-full.mx-auto.mb-4
   [:div.flex.items-center
    [er/text-area {:class "input h-full max-h-none"
                   :style {:line-height "1.5rem"}
                   :on-enter (fn [] (submit-chat gpt-chat))}
     (:input-atom gpt-chat)]
    [:button.btn.btn-primary.btn-md.mx-1
     {:on-click (fn [] (submit-chat gpt-chat))}
     [:> Send {:size 20}]]]])

(defrecord GPTChat [message-history-atom input-atom prompt-endpoint chat-options]
  Renderable
  (render [this]
    [:v-box.easyreagent-fullstack-gpt-gptchat.overflow-y-scroll.scrollbar-hide
     {:style {:flex-direction "column-reverse"
              :max-height "100%"
              :display "flex"}}
     [gpt-input-box this]
     [:> AnimatePresence
      {:transition-key @message-history-atom}
      (when @message-history-atom
        [:div.scrollbar-hide.overflow-scroll
         {:style {:flex-direction "column-reverse"
                  :display "flex"}}
         (for [message  (reverse @message-history-atom)]
           [:div.flex.flex-col [easyreagent.util/render message]])])]]))

