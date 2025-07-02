(ns easyreagentserver.fullstack.admin 
  (:require
   [easyreagentserver.fullstack.config :as config]
   [easyreagentserver.fullstack.login :as login]))


(config/create-component-config
 :top-level
 admin-user {:default-value nil}
 admin-email {:default-value nil})


(defn check-against-admin-user [user]
  (if (and @admin-user user)
    (= ((login/identifier-key) user)
       @admin-user)
    false))

(def is-admin-user-fn?
  (atom check-against-admin-user))

(defn is-admin-user? [user]
  (@is-admin-user-fn? user))
