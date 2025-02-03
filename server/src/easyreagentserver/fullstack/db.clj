(ns easyreagentserver.fullstack.db
  (:require [monger.core :as mg]
            [monger.ring.session-store :refer [monger-store]]))


(def conn (mg/connect))
(def db (atom (mg/get-db conn "easyreagent-test")))

(defn get-session-store []
  (monger-store @db "easyreagent-sessions"))
