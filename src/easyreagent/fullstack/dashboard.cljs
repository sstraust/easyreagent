(ns easyreagent.fullstack.dashboard 
  (:require
   [reagent.core :as r]
   [easyreagent.util :as er-util]
   [reagent.dom :as rdom]))

(def dashboard-data (r/atom nil))

(defn load-dashboard-data []
  (er-util/post-request
   "/easyreagent/fullstack/dashboard/getDashboardData"
   {}
   :json-response #(reset! dashboard-data %)
   :failure #(js/alert "failed to load dashboard")))
                          

(defn dashboard []
  [:v-box
   [:div "Dashboard!"]
   [:div "Users count: " (:users-count @dashboard-data)]])

(defn ^:export load-dashboard []
  (load-dashboard-data)
  (rdom/render [dashboard]
               (.getElementById js/document "all-content")))
