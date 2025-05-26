(ns easyreagent.fullstack.feedback
  (:require
   [easyreagent.components :as er]
   [easyreagent.fullstack.chat-state :as chat-state]
   [easyreagent.util :as er-util]
   [reagent.core :as r]
   [reagent.dom :as rdom]))



(defn give-feedback []
  (let [feedback-text (r/atom "")
        email-text (r/atom "")]
    (fn []
      [er/heroed-content {:style {:min-height "40vh"}}
       [:form.flex.flex-col.items-center
     {:on-submit (fn [e]
                   (.preventDefault e)
                   (chat-state/send-message
                    "feedback-all"
                    (str @feedback-text "\n\n Email: " @email-text)
                    :callback (fn [x] (er-util/post-redirect
                                       "/easyreagent/fullstack/feedback/success"
                                       {:email @email-text
                                        :text @feedback-text}))))}
        ;; [:div.text-base.self-start {:class "text-base-content/70"} "Your Feedback"]
     ;; you probably want a smart-textarea
     ;; or a markdown textarea component
     [:v-box.w-screen.max-w-3xl
      
      
      [:v-box.mx-8.mt-4
     [er/text-area
      {:name "feedback"
       :class "!max-w-none h-24 !text-sm"
       :placeholder "Tell me anything! I read everything you send me."} feedback-text]
       [:div.text-sm.mt-6 "Can I contact you to follow up?"]
       [:h-box.text-sm "Leave e-mail if yes: "
        [er/text-field {:class "mx-4"
                        :placeholder "e-mail"} email-text]]
     ;; you want user to be able to optionally provide their e-mail
     [:input.btn-native.mt-6.cursor-pointer
      {:type "submit"
       :value "Give Feedback"}]]]
     ]])))

(defn feedback-page []
  [:div
   [give-feedback]])

(defn ^:export load-feedback []
  (rdom/render
   [feedback-page]
   (.getElementById js/document "all-content")))

(defn page-data []
  (js->clj js/easyreagent.page_data :keywordize-keys true))



(defn feedback-success-page []
  [er/heroed-content
   [:v-box.max-w-3xl 
    [:div "Thanks for submitting your feedback!"]
    (if (not (empty? (:email (:response-data (page-data)))))
      [:div.mt-2 "The gremlins are reading your comments and frantically working on a response."]
      [:div.mt-2 "You didn't leave an email... the gremlins will respect your solitude, and work furiously on our application."])
    [:v-box.mx-3.border.border-1.mt-2
     [:div "Your feedback:"]
     [:div.mx-4 (str (:text (:response-data (page-data))))]
     (when (not (empty? (:email (:response-data (page-data)))))
      [:h-box
       [:div "Your e-mail:"]
       [:div.mx-2 (str (:email (:response-data (page-data))))]])]
    ]
   ]
  )

(defn ^:export load-success []
  (rdom/render
   [feedback-success-page]
   (.getElementById js/document "all-content")))



(defn give-feedback-button []
  [:a.link {:href "/easyreagent/fullstack/feedback"
            :target "_blank"}
   "Give Feedback"])
