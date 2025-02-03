(ns easyreagentserver.core
  (:require
   [clojure.data.json :as json]
   [compojure.core]
   [compojure.route :as route]
   [easyreagentserver.fullstack.db :as er-db]
   [easyreagentserver.fullstack.login :as er-login]
   [easyreagentserver.internal :as internal]
   [environ.core :refer [env]]
   [me.raynes.conch.low-level :as sh]
   [ring.adapter.jetty :as ring]
   [ring.middleware.cookies :refer [wrap-cookies]]
   [ring.middleware.gzip :refer [wrap-gzip]]
   [ring.middleware.json :refer [wrap-json-params]]
   [ring.middleware.keyword-params :refer [wrap-keyword-params]]
   [ring.middleware.params :only [wrap-params] :refer [wrap-params]]
   [ring.middleware.session :refer [wrap-session]]))

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
                        (wrap-gzip
                         (wrap-cookies
                          (wrap-session
                           (er-login/wrap-session-user
                          (wrap-json-params
                          (wrap-params
                           (wrap-keyword-params
                            (extra-wrappers all-routes)))))
                          {:store (er-db/get-session-store)}
                          )))
                        options))
    (println "Server is running on port " (:port options))))
                      
(def success-response
  internal/success-response)

(def failure-response internal/failure-response)

(def json-response internal/json-response)

(defn param-as-list [param-val]
  (if (vector? param-val)
    param-val
    (list param-val)))
(defn uuid []
  (apply str (into [] (repeatedly 5 #(rand-int 1000)))))
