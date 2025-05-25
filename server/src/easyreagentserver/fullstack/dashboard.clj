(ns easyreagentserver.fullstack.dashboard 
  (:require
   [compojure.core :refer [context defroutes GET POST]]
   [compojure.route :as route]
   [easyreagentserver.core :as er-server]
   [easyreagentserver.fullstack.admin :as admin]
   [easyreagentserver.fullstack.db :refer [db]]
   [easyreagentserver.fullstack.login :as login]
   [easyreagentserver.fullstack.webpage :as webpage]
   [monger.collection :as mc]))


(defn get-dashboard-data [params]
  (println "getting dashboard data")
  (if-not (admin/is-admin-user?  (:er-session-user params))
    (er-server/failure-response "not an admin user")
    (er-server/json-response
     {:users-count (mc/count @db @login/users-table)})))


(defonce version-seed (rand-int 100000))
;; (def version-seed (rand-int 100000))
(defn dashboard-page []
  (webpage/webpage-response
   "easyreagent.fullstack.dashboard.load_dashboard()"))

(defroutes dashboard-routes
  (context
   "/easyreagent/fullstack/dashboard" []
   (POST "/getDashboardData" params (get-dashboard-data params))
   (GET "/" params (dashboard-page)))
  (route/resources "/easyreagent/fullstack/dashboard/out" {:root "easyreagent/out"}))
