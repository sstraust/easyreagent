(ns easyreagentserver.fullstack.feedback 
  (:require
   [compojure.core :refer [defroutes]]
   [compojure.core :refer [context defroutes GET POST]]
   [compojure.route :as route]
   [easyreagentserver.fullstack.admin :as admin]
   [easyreagentserver.fullstack.chat :as er-chat]
   [easyreagentserver.fullstack.webpage :as webpage]))

(defmethod er-chat/has-permission? [:feedback ::er-chat/write]
  [chat-id user & opts]
  true)

(defmethod er-chat/has-permission? [:feedback ::er-chat/read]
  [chat-id user & opts]
  ;; should this take params as input?
  (println "feedback has permission?")
  (admin/is-admin-user? user))

(defonce version-seed (rand-int 100000))
(defn feedback-page []
  (webpage/webpage-response
   "easyreagent.fullstack.feedback.load_feedback()"))


(defn feedback-success-page [params]
  (webpage/webpage-response
   "easyreagent.fullstack.feedback.load_success()"
   {:response-data (:params params)}))


(defroutes feedback-routes
  (context
   "/easyreagent/fullstack/feedback" []
    (GET "/" params (feedback-page))
    (POST "/success" params (feedback-success-page params)))
  (route/resources "/easyreagent/fullstack/compiled/" {:root "easyreagent/"}))


