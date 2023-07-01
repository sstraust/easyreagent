(ns easyreagent.create_component_macros)



(defmacro defc [name args-list & body]
  `(defn ~name
     ;; if no attr map is provided
     ;; return the original reagent form
     (~args-list (let [~'attr-map nil] ~@body))
     (~(into [] (cons 'attr-map args-list))
      (fn ~(into [] (cons 'attr-map args-list))
        (easyreagent.create_component/with-attr-map ~'attr-map
        (do ~@body))))))
      
