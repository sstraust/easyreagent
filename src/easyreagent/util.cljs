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


(defn post-redirect [path params]
  (let [form (.createElement js/document "form")]
    (set! (.-method form) "POST")
    (set! (.-action form) path)
    (set! (.-style form) "display: none;") ; optional: hide the form

    ;; Create hidden input fields from params
    (doseq [[k v] params]
      (let [input (.createElement js/document "input")]
        (set! (.-type input) "hidden")
        (set! (.-name input) (name k))
        (set! (.-value input) (str v)) ; ensure value is a string
        (.appendChild form input)))

    ;; Append form and submit
    (.appendChild (.-body js/document) form)
    (.submit form)))
