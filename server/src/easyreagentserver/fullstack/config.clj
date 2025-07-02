(ns easyreagentserver.fullstack.config 
  (:require
   [easyreagentserver.fullstack.admin :as admin]))

(defn configure-fullstack-components [options]
  (when (:admin-user options)
    (reset! admin/admin-user (:admin-user options)))
  (when (:admin-email options)
    (reset! admin/admin-email (:admin-email options))))


