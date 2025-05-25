(ns easyreagent.fullstack.dashboard 
  (:require
   [easyreagent.fullstack.chat :as chat]
   [easyreagent.util :as er-util]
   [reagent.core :as r]
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
   [:div "Users count: " (:users-count @dashboard-data)]
   [:div "Feedback: "]
   [chat/prev-messages "feedback-all"]
   ])

(defn ^:export load-dashboard []
  (load-dashboard-data)
  (rdom/render [dashboard]
               (.getElementById js/document "all-content")))
