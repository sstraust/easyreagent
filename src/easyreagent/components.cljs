(ns easyreagent.components
  (:require 
   [reagent.dom :as rdom]
   [easyreagent.create-component :refer [with-attr-map]]
   [reagent.core :as r])
  (:require-macros [easyreagent.create-component-macros :refer [defc]]))


(defc text-field [curr-value-atom]
  [:input {:on-change (fn [val] (reset! curr-value-atom (-> val .-target .-value)))
           :on-key-down (fn [event]
                          (when (and (= 13 (.-keyCode event))
                                     (not (nil? (:on-enter attr-map))))
                            ((:on-enter attr-map))))
           :value @curr-value-atom
           :class "input input-xs input-bordered w-full max-w-xs"}])

(defc text-area [curr-value-atom]
  [:textarea {:on-change (fn [val] (do
                                     (reset! curr-value-atom (-> val .-target .-value))
                                     ((:additional-on-change attr-map))))
              :value @curr-value-atom
              :class "input input-xs input-bordered w-full max-w-xs"}])

(defn- get-date-str [time-millis]
  (let [seconds (quot time-millis 1000)
        minutes (quot seconds 60)
        hours (quot minutes 60)
        days (quot hours 24)]
    (if (> days 0) (str days " days")
        (str (mod hours 60) ":" (mod minutes 60) ":" (mod seconds 60)))))

(defn- reset-timer-and-check-end [curr-time end-time time-ended]
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

(defn popup-window [options is-shown & body]
  (fn [options is-shown & body]
    (when @is-shown
      [:div (easyreagent.create-component/merge-attrs options {:class "popout-menu"})
       [:div {:class "btn btn-ghost"
              :on-click (fn [] (swap! is-shown not))} "X"]
       (into [] (concat [:<>]  body))])))

;; style options
;; (defn popup-window [style-options is-visible & body]
;;   (let [style-options (if (map? style-options) style-options nil)
;;         is-visible (if (atom? style-map)
;;                      (
  
;; the problem is you don't know the right way to set up your
;; optional argumnets but also pass in varargs

;; you also need to make sure daisyui is imported correctly
;; so the behavior for varargs is:
;; if the first argument is a map, add it to the attrs
;; otherwise do nothing

;; it seems like it doesn't really make sense for the values to be a body and then args
;; but it's weird because you want it to be simple to type, and named args aren't simple

;; I think it's ok if there's like 1 atom, but if there's more than one you should use a map?
;; I'm not really sure


