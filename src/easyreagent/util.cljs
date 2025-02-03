(ns easyreagent.util
  (:require-macros [easyreagent.util])
  (:require [cljs.core.async :refer [<!]]
            [cljs-http.client :as http]))

(def curr-css (atom nil))

(defn reload-stylesheets []
  (cljs.core.async.macros/go
    (let [output (:body (<! (http/get (str "resources/global_output.css?v=" (rand-int 1000000)))))]
      (when (not (= @curr-css output))
        (js/reloadStylesheets))
      (reset! curr-css output))))

(defn reload-css []
  (js/setInterval
   (fn [] (reload-stylesheets)) 500))


(defn dev-reload-css []
  (js/setTimeout (fn []
                 (when (= js/mode "dev")
                   (reload-css)))
               3000))
(defn load-page [location]
  (set! (.-href (.-location js/window)) location))
  
(defn write-json [clj-map]
  (.stringify js/JSON (clj->js clj-map)))

(defn read-json-keywordize [json-str]
  (js->clj (.parse js/JSON json-str) :keywordize-keys true))


(defprotocol Renderable
  (render [this]))
