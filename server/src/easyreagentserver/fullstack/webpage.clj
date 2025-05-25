(ns easyreagentserver.fullstack.webpage
  (:require
   [clojure.data.json :as json]
   [easyreagentserver.core :as er-server]
   [hiccup.core :refer [html]]
   [hiccup.page :refer [include-css include-js]]))


(defonce version-seed (rand-int 100000))
(defn webpage-response
  ([load-function] (webpage-response load-function {}))
  ([load-function additional-data]
   (html
   [:head]
   [:body
    (if (= @er-server/MODE :dev)
      (include-js (str "/easyreagent/fullstack/compiled/out/main.js?v=" (rand-int 100000)))
      (include-js (str "/easyreagent/fullstack/compiled/prod_js/main.js?v=" version-seed)))
    (include-js "/resources/reload_css.js")
    (include-css (str "/easyreagent/fullstack/compiled/style.css?v=" (rand-int 100000)))
    (str "<script>mode=" (json/write-str @er-server/MODE) "</script>")
    (str "<script>window.easyreagent.page_data = "
         (json/write-str additional-data)
         ";</script>")
    

    [:div {:id "all-content"}]
        
    (str "<script>" load-function "</script>")])))
