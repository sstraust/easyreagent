(ns easyreagent.fullstack.login 
  (:require
   [easyreagent.components :as er]
   [reagent.core :as r]
   [easyreagent.util :as er-util]))


;; NOW I NEED TO MAKE
;; THE POST REQUEST, and SUBMIT THE ACTION
;; IF IT ACTUALLY WORKS


;; I SHOULD PROBABLY BUILD SINGUP FORM first
(defn handle-signup-submit [event username password
                            signup-success-action]
  (.preventDefault event)
  (er-util/post-request
   "/easyreagent/fullstack/login/submitSignup"
   {:username username
    :password password}
   :success signup-success-action
   :failure #(js/alert (str "Signup failed due to: " %))))

(defn signup-form [signup-success-action]
  (let [username (r/atom "")
        password (r/atom "")]
    (fn []
    [:div.card.max-w-xl
     [:form.card-body
      {:on-submit (fn [event] (handle-signup-submit
                               event @username @password
                               signup-success-action))}
      [:h1.text-3xl "Sign Up"]
      [:v-box.mr-8.ml-4
       [er/text-field
        {:type "text"
         :class "input input-bordered my-2 input-md max-w-none"
         :placeholder "email"}
        username]
       [er/text-field
        {:type "password"
         :placeholder "password"
         :class "input input-bordered my-1 input-md max-w-none"}
        password]]
      [:v-box.card-actions.items-end.my-2
       [:input.btn.btn-primary.btn-md {:type "submit"}]]]])))


(defn handle-login-submit [event username password
                           login-success-action]
  (.preventDefault event)
  (er-util/post-request
   "/easyreagent/fullstack/login/submitLogin"
   {:username username
    :password password}
   :success login-success-action
   :failure #(js/alert (str "Login Failed!: " %))
   ))

(defn login-form [login-success-action]
  (let [username (r/atom "")
        password (r/atom "")]
    (fn []
    [:div.card.max-w-xl
     [:form.card-body
      {:on-submit (fn [event]
                    (handle-login-submit event @username @password
                                         login-success-action))}
      [:h1.text-3xl "Log In"]
      [:v-box.mr-8.ml-4
       [er/text-field
        {:type "text"
         :class "input input-bordered my-2 input-md max-w-none"
         :placeholder "email"} username]
       [er/text-field 
        {:type "password"
         :class "input input-bordered my-1 input-md max-w-none"
         :placeholder "password"} password]]
      [:v-box.card-actions.items-end.my-2
       [:input.btn.btn-primary.btn-md {:type "submit"}]]]])))



(def curr-logged-in-name (r/atom "Logged Out"))
(defn get-login-user-helper []
  (er-util/post-request
   "/easyreagent/fullstack/login/currentUser"
   {}
   :json-response (fn [resp]
                    (reset! curr-logged-in-name
                            (first (vals resp))))
   :failure identity))
(def get-login-user (memoize get-login-user-helper))

(defn display-logged-in-user []
  (fn []
    (get-login-user)
    [:div @curr-logged-in-name]))

