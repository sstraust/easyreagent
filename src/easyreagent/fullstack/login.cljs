(ns easyreagent.fullstack.login 
  (:require
   [easyreagent.components :as er]
   [easyreagent.create-component :as create-component]
   [easyreagent.util :as er-util]
   [reagent.core :as r])
  (:require-macros [easyreagent.create-component-macros :refer [defc]]))


;; NOW I NEED TO MAKE
;; THE POST REQUEST, and SUBMIT THE ACTION
;; IF IT ACTUALLY WORKS


;; I SHOULD PROBABLY BUILD SINGUP FORM first
(defn handle-signup-submit [event username password
                            signup-success-action
                            & {:keys [signup-submit-path extra-signup-data]
                               :or {signup-submit-path "/easyreagent/fullstack/login/submitSignup"
                                    extra-signup-data nil}}]
  (.preventDefault event)
  (er-util/post-request
   signup-submit-path
      (merge
       extra-signup-data
       {:username username
        :password password})
   :success signup-success-action
   :failure #(js/alert (str "Signup failed due to: " %))))

(defc signup-form [signup-success-action]
  (let [username (r/atom "")
        password (r/atom "")]
    (fn []
    [:div.card.max-w-xl
     [:form.card-body
      {:on-submit (fn [event] (handle-signup-submit
                               event @username @password
                               signup-success-action
                               attr-map))}
      [:h1.text-3xl "Sign Up"]
      
      [:v-box.mr-8.ml-4
       [er/text-field
        {:type "text"
         :class "input input-bordered my-2 input-md"
         :style {:max-width "none"}
         :placeholder "email"}
        username]
       [er/text-field
        {:type "password"
         :placeholder "password"
         :style {:max-width "none"}
         :class "input input-bordered my-1 input-md"}
        password]]
      [:v-box.card-actions.items-end.my-2
       [:input.btn.btn-primary.btn-md.self-end {:type "submit"}]]
      (::subheading attr-map)]])))


(defn handle-login-submit [event username password
                           login-success-action]
  (.preventDefault event)
  (er-util/post-request
   "/easyreagent/fullstack/login/submitLogin"
   {:username username
    :password password}
   :success login-success-action
   :failure #(js/alert (str "Login Failed!: " %))))

(defc login-form [login-success-action]
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
         :class "input input-bordered my-2 input-md"
         :style {:max-width "none"}
         :placeholder "email"} username]
       [er/text-field 
        {:type "password"
         :class "input input-bordered my-1 input-md"
         :style {:max-width "none"}
         :placeholder "password"} password]]
      [:v-box.card-actions.items-end.my-2
       [:input.btn.btn-primary.btn-md.self-end {:type "submit"}]]
      (::subheading attr-map)]
     ])))

(defn login-or-signup [currently-shown success-action & {:as options}]
  (case @currently-shown
        ::login [login-form {::subheading
                             [:p.mx-2.text-xs.text-center.mt-4
                              ;; {:style {:font-size "0.8rem"}}
                              "Don't have an account? "
                             [:a.link.text-primary {:on-click #(reset! currently-shown ::signup)}
                              "Sign Up"]]}
                            success-action]
        ::signup [signup-form
                  (merge (when (map? options) options)
                 {::subheading
                  [:p.mx-4.text-xs.mt-4.text-center
                   ;; {:style {:font-size "0.8rem"}}
                   "Already have an account? "
                   [:a.link.text-primary {:on-click #(reset! currently-shown ::login)}
                              "Sign In"]]})
                  success-action]))

(defn log-out-action []
  (er-util/post-request "/logOut"
      {}
    :success (fn [] (.reload js/location))
    :failure (fn [] (js/alert "failed to sign out"))))


(def ^:private is-logged-in-atom (r/atom false))
(def curr-logged-in-name (r/atom "Logged Out"))
(defn get-login-user-helper []
  (er-util/post-request
   "/easyreagent/fullstack/login/currentUser"
   {}
    :json-response (fn [resp]
                     (when (first (vals resp))
                       (reset! is-logged-in-atom true)
                       (reset! curr-logged-in-name
                               (first (vals resp)))))
   :failure identity))
(def get-login-user (memoize get-login-user-helper))

(defn display-logged-in-user
  ([] [display-logged-in-user nil])
  ([options]
  (let [popup-style {:style {:width "35rem"
                             :margin-top "10vh"
                                 :padding-left "4rem"
                                 :padding-right "3rem"
                                 :padding-bottom 10}}]
  (fn []
    (get-login-user)
    [:div.dropdown
     [:div.btn.text-secondary.btn-ghost.btn-md.max-w-48
      (create-component/merge-attrs
       (:button-style options)
       {:tabIndex "0"
        :role "button"})
      @curr-logged-in-name]
     [:ul {:tabIndex "0"
           :class "menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"}
      (if (= @curr-logged-in-name "Logged Out")
        [:<>
         [:li
          {:on-click (fn []
                       (er/create-popup
                        popup-style
                        (r/atom true)
                        [login-form
                         (fn [] (.reload js/location))]))}
                                        
          [:a "Log In"]]
         [:li
          {:on-click (fn []
                       (er/create-popup
                        popup-style
                        (r/atom true)
                        [signup-form
                         (fn [] (.reload js/location))]))}
          [:a "Sign Up"]]]
        [:li
         {:on-click (fn []
                      (er-util/post-request
                       "/easyreagent/fullstack/login/logout"
                       {}
                       :success (fn [] (.reload js/location))
                       :failure #(js/alert (str "failed to log out!: " %))))}
         [:a "Log Out"]])]]
     ;; @curr-logged-in-name
    ))))


(defn is-logged-in? []
  (get-login-user)
  @is-logged-in-atom)
