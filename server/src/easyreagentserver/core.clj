(ns easyreagentserver.core
  (:require
   [clojure.data.json :as json]
   [clojure.java.shell :as shell]
   [compojure.core]
   [compojure.route :as route]
   [easyreagentserver.fullstack.config]
   [easyreagentserver.fullstack.db :as er-db]
   [easyreagentserver.fullstack.login :as er-login]
   [easyreagentserver.internal :as internal]
   [environ.core :refer [env]]
   [hiccup.util :as hiccup.util]
   [me.raynes.conch.low-level :as sh]
   [ring.adapter.jetty :as ring]
   [ring.middleware.cookies :refer [wrap-cookies]]
   [ring.middleware.gzip :refer [wrap-gzip]]
   [ring.middleware.json :refer [wrap-json-params]]
   [ring.middleware.keyword-params :refer [wrap-keyword-params]]
   [ring.middleware.params :only [wrap-params] :refer [wrap-params]]
   [ring.middleware.session :refer [wrap-session]]
   [monger.collection :as mc]))

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
  (when (not (= @MODE :dev))
    (shell/sh "npx" "kill-port" (str (:port options))))
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
                           {:store (er-db/get-session-store)
                            :cookie-attrs {:max-age 315360000}}
                          )))
                        options))
    (easyreagentserver.fullstack.config/configure-fullstack-components (:fullstack options))
    (println "Server is running on port " (:port options))))
                      
(def success-response
  internal/success-response)

(def failure-response internal/failure-response)

(def json-response internal/json-response)

(def is-failure-response? internal/is-failure-response?)
(def is-success-response? internal/is-success-response?)

(def get-failure-message internal/get-failure-message)

(def parse-json-response internal/parse-json-response)

(defn param-as-list [param-val]
  (if (vector? param-val)
    param-val
    (list param-val)))
(defn uuid []
  (apply str (into [] (repeatedly 5 #(rand-int 1000)))))



(defn set-server-side-data [data-map]
  [:meta#global-easyreagent-metadata
   {:server-data (hiccup.util/escape-html (json/write-str data-map))}])
  

(def debug-only--globally-disable-database-cache (atom false))
;; using this current-time-millis so you can have with-redefs for testing
(defn current-time-millis []
  (System/currentTimeMillis))
(defn cache-to-db [input-fn mongo-table-name & {:keys [ttl-millis]}]
  (fn [& args]
    (let [db-entry (mc/find-one-as-map @er-db/db mongo-table-name
                                    {:query-str (str args)})
          db-result (get db-entry
                       :result)]
    (if (and db-result (not @debug-only--globally-disable-database-cache)
             (or (not ttl-millis) (< (current-time-millis)
                                     (+ (:insert-millis db-entry) ttl-millis)))
             (or (not (list? db-result))
                 (not (empty? db-result))))
      db-result
      (let [result (apply input-fn args)]
        (mc/update @er-db/db mongo-table-name
                   {:query-str (str args)}
                   {:query-str (str args)
                    :result result
                    :insert-time (java.util.Date.)
                    :insert-millis (current-time-millis)}
                   {:upsert true})
        result)))))


(comment


  )
