(ns easyreagentserver.fullstack.dashboard 
  (:require
   [clojure.data.json :as json]
   [hiccup.core :refer [html]]
   [compojure.core :refer [context defroutes GET POST]]
   [compojure.route :as route]
   [easyreagentserver.core :as er-server]
   [easyreagentserver.fullstack.admin :as admin]
   [easyreagentserver.fullstack.db :refer [db]]
   [easyreagentserver.fullstack.login :as login]
   [hiccup.page :refer [include-js]]
   [monger.collection :as mc]))


(defn get-dashboard-data [params]
  (println "getting dashboard data")
  (if-not (admin/is-admin-user?  params)
    (er-server/failure-response "not an admin user")
    (er-server/json-response
     {:users-count (mc/count @db @login/users-table)})))


(defonce version-seed (rand-int 100000))
(defn dashboard-page []
  (html
   [:head]
   [:body
    (if (= @er-server/MODE :dev)
      (include-js (str "/easyreagent/fullstack/dashboard/out/main.js?v=" (rand-int 100000)))
      (include-js (str "/easyreagent/fullstack/dashboard/prod_js/main.js?v=" version-seed)))
    (include-js "/resources/reload_css.js")
    (str "<script>mode=" (json/write-str @er-server/MODE) "</script>")
    [:div {:id "all-content"}]
        
    (str "<script>easyreagent.fullstack.dashboard.load_dashboard()</script>")]))


(defroutes dashboard-routes
  (context
   "/easyreagent/fullstack/dashboard" []
   (POST "/getDashboardData" params (get-dashboard-data params))
   (GET "/" params (dashboard-page)))
  (route/resources "/easyreagent/fullstack/dashboard/out" {:root "easyreagent/out"}))
