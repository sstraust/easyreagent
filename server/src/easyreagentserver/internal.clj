(ns easyreagentserver.internal
  (:require [clojure.data.json :as json]))

(defn success-response []
  {:status 200
   :headers {"Content-type" "application/json"}
   :body (json/write-str {:result "success"})})

(defn failure-response [message]
  {:status 200
   :headers {"Content-type" "application/json"}
   :body (json/write-str {:result "failure"
                          :reason message})})
(defn json-response [clojure-map]
  {:status 200
   :headers {"Content-type" "application/json"}
   :body (json/write-str
          (assoc clojure-map :easyreagent-result-type "json"))})

(defn is-failure-response? [response]
  (= (:result (json/read-str
               (:body response)
               :key-fn keyword))
     "failure"))

(defn is-success-response? [response]
  (= (:result (json/read-str
               (:body response)
               :key-fn keyword))
     "success"))

(defn get-failure-message [response]
  (:reason (json/read-str
               (:body response)
               :key-fn keyword)))
  

(defn parse-json-response [response]
  (json/read-str (:body response) :key-fn keyword))
           
