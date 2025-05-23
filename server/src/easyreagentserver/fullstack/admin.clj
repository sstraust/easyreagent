(ns easyreagentserver.fullstack.admin)

(def is-admin-user-fn? (atom (fn [params] false)))

(defn is-admin-user? [params]
  (@is-admin-user-fn? params))

