(ns easyreagentserver.fullstack.admin 
  (:require
   [easyreagentserver.fullstack.login :as login]))

(def admin-user (atom nil))

(defn check-against-admin-user [user]
  (if (and @admin-user user)
    (= ((login/identifier-key) user)
       @admin-user)
    false))

(def is-admin-user-fn?
  (atom check-against-admin-user))

(defn is-admin-user? [user]
  (@is-admin-user-fn? user))
