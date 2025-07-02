(ns easyreagentserver.fullstack.login
  (:require
   [compojure.core :refer [context defroutes POST]]
   [easyreagentserver.fullstack.config :as config]
   [easyreagentserver.fullstack.db :refer [db]]
   [easyreagentserver.internal :as er-internal]
   [monger.collection :as mc])
  (:import
   [org.bson.types ObjectId]
   org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder))

(config/create-component-config
 :login
 users-table {:default-value "easyreagent-users"})

(def password-encoder (BCryptPasswordEncoder.))


;; I've decided that I want to use the identifier map
;; but refactor the actual signup and login implementations
;; to a passportjs style strategy
;; that takes the identifier key as input
(defn identifier-key []
  :email)
(defn identifier-map [user]
  {(identifier-key) ((identifier-key) user)})

(def User
  [:map {:closed false}
   [(identifier-key) string?]
   [:password-hash string?]])


(defn create-user [user]
  (let [user (assoc user :password-hash
                    (.encode password-encoder (:password user)))
        user (dissoc user :password)
        curr-user (mc/find-one-as-map
                   @db @users-table
                   (identifier-map user))]
    (when-not curr-user
      (mc/update @db @users-table
                 (identifier-map user)
                 user
                 {:upsert true
                  :multi false})
      (mc/find-one-as-map
                   @db @users-table
                   (identifier-map user)))))
    
                                      
(defn check-username-and-password [identifier password]
  (let [user (mc/find-one-as-map
              @db @users-table
              {(identifier-key) identifier})]
    (when  (and password
                (:password-hash user)
                (.matches password-encoder
                          password
                          (:password-hash
                           user)))
      user)))


(defn submit-signup-action [{{:keys [username password]} :params}]
  (if-let [user (create-user {:email username
                              :password password})]
    ;; on success, we want to return the id of the current user
    ;; in a session
    (assoc-in (er-internal/success-response)
              [:session :id-str]
              (str (:_id user)))
    (er-internal/failure-response "username already  exists!")))

(defn get-auth-user-if-present [params]
  (and
   (:id-str (:session params))
   (dissoc (mc/find-one-as-map @db @users-table {:_id (ObjectId. (:id-str (:session params)))})
           :password-hash)))

(defn wrap-session-user [handler]
  (fn [request]
    (let [user (get-auth-user-if-present request)]
      (handler (assoc request :er-session-user user)))))

(defn get-current-user [params]
  (er-internal/json-response
   (identifier-map (:er-session-user params))))

(defn submit-login-action [{{:keys [username password] :as params} :params}]
  (if-let [user (check-username-and-password
                  username password)]
    (assoc-in (er-internal/success-response)
              [:session :id-str]
              (str (:_id user)))
    (er-internal/failure-response "Incorrect username or password")))

(defn logout [params]
  (assoc
   (er-internal/success-response)
   :session nil))

      

(defroutes login-routes
  (context
   "/easyreagent/fullstack/login" []
    (POST "/submitSignup" params (submit-signup-action params))
    (POST "/submitLogin" params
      (submit-login-action params))
    (POST "/currentUser" params (get-current-user params))
    (POST "/logout" params (logout params))))

;; (comment
;;   (str (:_id (first (mc/find-maps @db @users-table nil))))
;;   (mc/remove @db @users-table {})
;;   (submit-signup-action {:params {:username "sam"
;;                                   :password "tests"}})
;;   )
