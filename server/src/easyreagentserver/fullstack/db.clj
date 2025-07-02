(ns easyreagentserver.fullstack.db
  (:require
   [easyreagentserver.fullstack.config :as config]
   [monger.core :as mg]
   [monger.ring.session-store :refer [monger-store]]))

(def conn (mg/connect))

(config/create-component-config
 :top-level
 db {:default-value (mg/get-db conn "easyreagent-test")})

(defn get-session-store []
  (monger-store @db "easyreagent-sessions"))
