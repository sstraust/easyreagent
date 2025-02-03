(ns easyreagent.fullstack.chat
  (:require
   [easyreagent.components :as er]
   [easyreagent.fullstack.chat-state :as chat-state]
   [reagent.core :as r])
  (:require-macros [easyreagent.create-component-macros :refer [defc]]
                   [cljss.core :refer [inject-global]]))

;; DRAFT -- this component is not yet finished
(inject-global
 {:.er-fullstack-chat-prev-messages-view
  {:background-color "grey"}
  :.er-fullstack-main-input-box
  {:height "auto"
   :max-width "none"
   :align-self "stretch"}
  :.er-fullstack-chat-submit
  {:margin-left "0.25rem"}
  :.er-fullstack-chat-new-message-form
  {:margin-top "0.25rem"}})


(defn prev-messages [chat-id]
  (fn [chat-id]
    (chat-state/fetch-messages-once chat-id)
    [:v-box.er-fullstack-chat-prev-messages-view
     (for [message (:messages (get @chat-state/all-messages chat-id))]
       [:p (:title message)])]))


(defn new-message-input [chat-id]
  (let [curr-text-input (r/atom "")]
    (fn [chat-id]
      [:form.er-fullstack-chat-new-message-form
       {:on-submit (fn [e]
                     (.preventDefault e)
                      (chat-state/send-message chat-id
                                               @curr-text-input)
                     (reset! curr-text-input ""))}
       [:h-box.items-end
        [er/text-field {:class "er-fullstack-main-input-box"
                        :name "message-contents"
                        :id "message-contents"} curr-text-input]
        [:input {:type "hidden"
                 :name "chat-id"
                 :id "chat-id"
                 :value chat-id}]
        [:input.btn.btn-primary.er-fullstack-chat-submit
         {:type "Submit"
          :value "Send"}]]])))

;; maybe accept login requirements?
;; idk -- what is a chat?
;; what kind of info should it contain?
;; what does this do?
;; what does it look like?
(defn chat-window [chat-id]
  [:v-box
   [prev-messages chat-id]
   [new-message-input chat-id]])
