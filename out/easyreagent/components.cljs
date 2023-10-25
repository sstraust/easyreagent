(ns easyreagent.components
  (:require 
   [reagent.dom :as rdom]
   [easyreagent.create-component :refer [with-attr-map]]
   [goog.string :as gstr]
   [cljss.core]
   [reagent.core :as r])
  (:require-macros [easyreagent.create-component-macros :refer [defc]]
                   [cljss.core :refer [inject-global]]))

(inject-global
 {:v-box {:display "flex"
          :flex-direction "column"}
  :h-box {:display "flex"
          :flex-direction "row"}
  :.er-popup-window-container {:position "fixed"
                               :left "0px"
                               :top "0px"
                               :width "100%"
                               :height "100%"
                               :z-index 1020}
  :.er-popup-window-background {:position "fixed"
                                :left "0px"
                                :top "0px"
                                :width "100%"
                                :height "100%"
                                :background-color "black"
                                :opacity 0.7
                                :z-index -1}
  :.er-popup-window {:margin-top "5%"
                     :margin-left "auto"
                     :margin-right "auto"
                     :background-color "white"
                     :width "fit-content"
                     :padding "16px"
                     :padding-left "25px"
                     :border-radius "16px"}
  :.er-x-out  {:float "right"
              :font-size "24px"
               :font-weight "500"
               :margin-left "5px"
               :position "relative"
               :top "-15px"
               :left "5px"}
  :.er-x-out:hover {:color "green"
                    :text-decoration "none"
                    :cursor "pointer"}
  :.er-x-out:focus {:color "green"
                    :text-decoration "none"
                    :cursor "pointer"}
  })
;; asdf
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

(defn- reset-timer-and-check-end [curr-time end-time time-ended attr-map]
  (.log js/console attr-map)
  (println attr-map)
  (if @time-ended
    (reset! curr-time end-time)
    (if (> @curr-time end-time)
      (do (reset! time-ended true)
          (when (not (nil? (:on-ended attr-map)))
            ((:on-ended attr-map))))
      (reset! curr-time (.now js/Date)))))

;; Takes as input the end time in epoch milliseconds
;; there's some incorrect logic in here still so you can't quite debug
(defc timer [end-time]
  (let [curr-time (r/atom (.now js/Date))
        time-ended (r/atom false)]
    (js/setInterval (fn [] (reset-timer-and-check-end curr-time end-time time-ended attr-map)) 100)
    (fn []
      [:div (get-date-str (- end-time @curr-time))])))

(defn popup-window [options is-shown & body]
  (fn [options is-shown & body]
    (when @is-shown
      [:div {:class "er-popup-window-container"}
       [:div {:class "er-popup-window-background"
              :on-click (fn [] (reset! is-shown false))}]
      [:div (easyreagent.create-component/merge-attrs options {:class "er-popup-window"})
       [:div {:class "er-x-out"
              :on-click (fn [] (reset! is-shown false))} (gstr/unescapeEntities "&times;")]
       (into [] (concat [:<>]  body))]])))


;; dropdown is really pure css
;; so you don't need a special component for it
;; you want to keep pure CSS for it, but you want to make it _easier_
;; than the default daisyui syntax
;; so what should it look like?
;; maybe make a menu-items to make the styling easier?

;; start with the ideal interface, and then work backwards:

;; [:dropdown
;;  [:summary "Dropdown button"]
;;  [list-menu
;;   [:a "link1"]
;;   [:a "link2"]]]


;; (if (= (take-last 2 (nth zz 2))
;;        (list `& `body))
;;   ;; then I want the function to check
;;   ;; whether the first argument is a map type
;;   ;; how should defn behave
;;   ;; if there is no attr-map, and no optional args provided
;;   ;; it should let attr-map 

;;   `(defn ~name ~args-list
;;      (if (not (map? ~(first args-list)))
;;        (
       
     
     
  

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


