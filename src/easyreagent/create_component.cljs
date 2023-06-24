(ns easyreagent.create_component)

(defn first-or-merge [elt1 elt2]
  (if (and (map? elt1) (map? elt2))
    (merge-with first-or-merge elt1 elt2)
    elt1))


(defn merge-attrs [attr-map original-attr-map]
  (let [class-attrs (str (:class attr-map)
                         " "
                         (:class original-attr-map))
        merged-maps (merge-with first-or-merge attr-map original-attr-map)]
    (assoc merged-maps :class class-attrs)))


(defn with-attr-map [attr-map reagent-form]
  (if (not (map? (second reagent-form)))
    (into [] (concat (take 1 reagent-form)
                     [attr-map]
                     (drop 1 reagent-form)))
    (into [] (concat (take 1 reagent-form)
                     [(merge-attrs attr-map (second reagent-form))]
                     (drop 2 reagent-form)))))




;; add as test case?
(merge-attrs
 {:style {:height 100
          :width 100}
  :class "btn"}
 {:style {:height 10
          :color "blue"}
  :class "btn-outline"})
  
  


    
