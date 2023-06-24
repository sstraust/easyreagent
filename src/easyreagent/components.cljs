(ns easyreagent.components
  (:require 
   [reagent.dom :as rdom]
   [easyreagent.create_component :refer [with-attr-map]]
   [reagent.core :as r])
  (:require-macros [easyreagent.create_component_macros :refer [defc]]))


(println (macroexpand-1 '(defc text-field [curr-value-atom]
                           [:input])))

(defc text-field [curr-value-atom]
  [:input {:on-change (fn [val] (reset! curr-value-atom (-> val .-target .-value)))
           :value @curr-value-atom
           :class "input input-xs input-bordered w-full max-w-xs"}])

;; now you want to verify that it
;; actually loads the components as a library
;; you have it set up with github
;; you have it packaged correctly


;; so your first goal is just to import it in the deps.edn
;; (defn text-field [additional-options curr-value-atom]
;;   [:input (merge additional-options
;;                  {:on-change (fn [val] (reset! curr-value-atom (-> val .-target .-value)))
;;                   :value @curr-value-atom
;;                   :style (merge 
;;                           {:width "100%"
;;                            :background-color "inherit"
;;                            :font-size 9}
;;                           (:style additional-options))
;;                   :class (or (:class additional-options) "input input-xs input-bordered w-full max-w-xs")})])


(defn text-area [additional-options curr-value-atom]
  [:textarea (merge additional-options
                 {:on-change (fn [val] (reset! curr-value-atom (-> val .-target .-value)))
                  :style (merge 
                          {:width "100%"
                           :background-color "inherit"
                           :font-size 9}
                          (:style additional-options))
                  :class (or (:class additional-options) "input input-xs input-bordered w-full max-w-xs")
                  :value @curr-value-atom})])

(defn get-date-str [time-millis]
  (let [seconds (quot time-millis 1000)
        minutes (quot seconds 60)
        hours (quot minutes 60)
        days (quot hours 24)]
    (if (> days 0) (str days " days")
        (str (mod hours 60) ":" (mod minutes 60) ":" (mod seconds 60)))))

(defn reset-timer-and-check-end [curr-time end-time time-ended]
  (if @time-ended (reset! curr-time end-time)
      (if (> @curr-time end-time)
        (do (reset! time-ended true))
        (reset! curr-time (.now js/Date)))))

(defn timer [end-time]
  (let [curr-time (r/atom (.now js/Date))
        time-ended (r/atom false)]
    (js/setInterval (fn [] (reset-timer-and-check-end curr-time end-time time-ended)))
    (fn []
      [:div (get-date-str (- end-time @curr-time))])))
