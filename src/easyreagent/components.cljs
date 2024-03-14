(ns easyreagent.components
  (:require 
   [reagent.dom :as rdom]
   [easyreagent.create-component :refer [with-attr-map]]
   [goog.string :as gstr]
   [goog.string.format]
   [cljss.core]
   [reagent.core :as r])
  (:require-macros [easyreagent.create-component-macros :refer [defc]]
                   [cljss.core :refer [inject-global]]))

(def easyreagent-global-elements (r/atom []))
(def easyreagent-global-elements-id "easyreagentGlobalState")
;; (reset! easyreagent-global-elements [])

(defn global-state-component []
  [:div (for [elt @easyreagent-global-elements]
                           elt)])

(defn add-component-to-global-state [new-component]
  (let [curr-global (.getElementById js/document easyreagent-global-elements-id)]
    (when (not curr-global)
      (let [new-elt (.createElement js/document "div")]
        (set! (.-id new-elt) easyreagent-global-elements-id)
        (.appendChild (.-body js/document) new-elt))
      (rdom/render [global-state-component]
                   (.getElementById js/document easyreagent-global-elements-id)))
  (swap! easyreagent-global-elements conj new-component)))

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
                     :padding-right "20px"
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
  ".er-modal-info-container-div > .er-modal-info-text-wrapper" {:display "none"}
  ".er-modal-info-container-div:hover > .er-modal-info-text-wrapper" {:display "block"}
  ".er-modal-info-text-wrapper:hover" {:display "block"}
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

(defc checkbox [is-checked-atom]
  [:input {:type "checkbox"
           :checked @is-checked-atom
           :on-click (fn [] (swap! is-checked-atom not))}])

(defc slider [current-value-atom min max]
  [:input {:type "range" :min min :max max :value @current-value-atom
           :style {:float "left"
                   :width "100%"
                   :margin-top 3}
           :on-change (fn [val] (reset! current-value-atom (-> val .-target .-value)))}])

(defn- get-date-str [time-millis]
  (let [seconds (quot time-millis 1000)
        minutes (quot seconds 60)
        hours (quot minutes 60)
        days (quot hours 24)]
    (if (> days 0) (str days " days")
        (str (when (> hours 0)
               (str (gstr/format "%2d" hours) ":"))
             (gstr/format "%02d" (mod minutes 60)) ":"
             (gstr/format "%02d" (mod seconds 60))))))

(defn- reset-timer-and-check-end [curr-time end-time time-ended attr-map]
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
      [:v-box (easyreagent.create-component/merge-attrs options {:class "er-popup-window"})
       [:div {:style {:height "1rem"}} [:div {:class "er-x-out"
              :on-click (fn [] (reset! is-shown false))} (gstr/unescapeEntities "&times;")]]
       (into [] (concat [:<>]  body))]])))


(defn create-popup
  ([is-shown content] (create-popup nil is-shown content))
  ([options is-shown content]
   (add-component-to-global-state [popup-window options is-shown content])))

(defn submit-button
  ([content] [submit-button nil content])
  ([options content]
   [:h-box.w-full.justify-end.er-submit-button-container
    [:button options content]]))
  

(defn create-alert
  ([content]
   (create-alert nil content))
  ([options content]
   (let [is-shown (r/atom true)]
     (create-popup options is-shown
                   [:v-box.er-alert-popup-container
                    content
                    [submit-button {:on-click (fn [] (reset! is-shown false))} "Got It"]]))))

(defn- rand-id []
  (str "id-" (.floor js/Math (* 1000000 (.random js/Math)))
       (.floor js/Math (* 1000000 (.random js/Math)))))


(def modal-info-view-width 500)
(defc with-modal-info [description content]
  (let [is-shown (r/atom false)
        curr-id (rand-id)
        curr-pos-x (r/atom nil)
        curr-pos-y (r/atom nil)
        bounding-rect (r/atom nil)]
    (fn [description content]
      [:div.er-modal-info-container-div
       {:id curr-id
        :on-mouse-over
        (fn [e]
          (.log js/console curr-id)
          (when (not (= (.-left (.getBoundingClientRect (.getElementById js/document curr-id))) @curr-pos-x))
            (reset! curr-pos-x
                    (.-left (.getBoundingClientRect (.getElementById js/document curr-id)))))
          (when (not (= (.getBoundingClientRect (.getElementById js/document curr-id))
                        @bounding-rect))
            (reset! bounding-rect
                    (.getBoundingClientRect (.getElementById js/document curr-id))))
          (when (not (= (.-top (.getBoundingClientRect (.getElementById js/document curr-id))) @curr-pos-y))
            (reset! curr-pos-y
                    (.-top (.getBoundingClientRect (.getElementById js/document curr-id)))))
          (when (not @is-shown)
            (reset! is-shown true)))}
          content
       (when @is-shown
         (let [position-map
               (case (:anchor-position attr-map)
                 :right {:top @curr-pos-y
                         :left (.-right @bounding-rect)}
                 :bottom {:top (.-bottom @bounding-rect)
                          :left (.-left @bounding-rect)}
                 :top {:top  @curr-pos-y
                       :left (.-left @bounding-rect)}
                 {:top @curr-pos-y
                  :left @curr-pos-x})]
         [:div.er-modal-info-text-wrapper
          {:style (merge {:position "fixed"
                          :z-index 10}
                         position-map)}
          [:div {:style (case (:anchor-position attr-map)
                          :right {:position "absolute"
                                  :left 0
                                  :top 0}
                          :bottom {:position "absolute"
                                   :left 0
                                   :top 0}
                          :top {:position "absolute"
                                :left 0
                                :bottom 0}
                          {:position "absolute"
                                 :right 0
                                 :top 0})}
           [:div.er-modal-info-text
            [:div description]]]]))])))
