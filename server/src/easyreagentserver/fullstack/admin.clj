(ns easyreagentserver.fullstack.admin 
  (:require
   [easyreagentserver.fullstack.login :as login]))

(def admin-user (atom nil))

(defn check-against-admin-user [params]
  (if (and @admin-user (:er-session-user params))
    (= ((login/identifier-key) (:er-session-user params))
       @admin-user)
    false))
(def is-admin-user-fn?
  (atom check-against-admin-user))

(defn is-admin-user? [params]
  (@is-admin-user-fn? params))
