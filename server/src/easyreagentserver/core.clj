(ns easyreagentserver.core
  (:require [me.raynes.conch.low-level :as sh]
            [ring.adapter.jetty :as ring]
            [compojure.route :as route]
            [compojure.core]
            [clojure.data.json :as json]
            [ring.middleware.json :refer [wrap-json-body wrap-json-params]]
            [ring.middleware.gzip :refer [wrap-gzip]]
            [ring.middleware.cookies :refer [wrap-cookies]]
            [ring.middleware.keyword-params :refer [wrap-keyword-params]]
            [ring.middleware.params :only [wrap-params] :refer [wrap-params]]
            [environ.core :refer [env]]))

(def MODE (atom
           (if (= (:clojure-project-mode env) "dev")
             :dev
             :prod)))

(defn is-dev? []
  (= @MODE :dev))

(defn is-test []
  (= @MODE :test))

(defn start-tailwind-server-uncached [js-dir]
  (sh/proc "npx" "tailwindcss"
           "-i" "./resources/global.css"
           "-o" "./resources/global_output.css"
           "--watch=always" :dir js-dir))
(def start-tailwind-server (memoize start-tailwind-server-uncached))


(defonce web-server (atom nil))
(defn run-web-server [js-dir routes options]
  (when (= @MODE :dev)
    (start-tailwind-server js-dir))
  (when (not (nil? @web-server))
    (.stop @web-server))
  (let [javascript-routes (route/files "/out" {:root (if (= @MODE :dev)
                                                       (str js-dir "/out")
                                                       (str js-dir "/prod_js"))})
        css-routes (route/files "/resources" {:root (str js-dir "/resources")})
        all-routes (compojure.core/routes routes
                                          javascript-routes
                                          css-routes)
        extra-wrappers (or (:extra-wrappers options) identity)]
    (reset! web-server (ring/run-jetty
                        (extra-wrappers (wrap-gzip
                         (wrap-cookies
                          (wrap-json-params
                          (wrap-params
                           (wrap-keyword-params all-routes))))))
                        options))
    (println "Server is running on port " (:port options))))
                      
  
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
   :body (json/write-str clojure-map)})

(defn param-as-list [param-val]
  (if (vector? param-val)
    param-val
    (list param-val)))
