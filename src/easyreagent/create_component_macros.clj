(ns easyreagent.create-component-macros)


;; it's extra tricky, because if
;; the reagent form is a function then this won't work
;; because (do ~@body) will return a function of functions
;; what's going on is, if (do ~@body) is a function
;; then you need to evaluate it before calling with-attr-map
;; but remember the function the user passes in doesn't take
;; the attr-map args-list

(require 'clojure.walk)

(defmacro defc [name args-list & body]
  (let [attr-map-atom-symbol (gensym)]
  `(defn ~name
     ;; if no attr map is provided
     ;; return the original reagent form
     (~args-list (let [~'attr-map nil] ~@body))
     (~(into [] (cons 'attr-map args-list))
      ;; if the body is a function with let statements,
      ;; the let statements need to be evaluated _before_
      ;; in order for this to work correctly
      ;; otherwise, you _need_ the body to be re-evaluated in the
      ;; function context so that it reloads every time :(
      (let [~attr-map-atom-symbol (atom ~'attr-map)
            result# (do ~@(clojure.walk/postwalk-replace
                           {'attr-map `(deref ~attr-map-atom-symbol)}
                           body))]
        (if (not (fn? result#))
          (easyreagent.create-component/with-attr-map ~'attr-map result#)
          (fn ~(into [] (cons 'attr-map args-list))
            (reset! ~attr-map-atom-symbol ~'attr-map)
            (easyreagent.create-component/with-attr-map ~'attr-map
              (apply result# ~args-list)))))))))


      ;;         result#)
            
          
      ;;       result# (if (fn? result#) (apply result# ~args-list) result#)]
        
      
      ;; (fn ~(into [] (cons 'attr-map args-list))
      ;;   (let [result# (do ~@body)
      ;;         result# (if (fn? result#) (apply result# ~args-list) result#)]
      ;;     (easyreagent.create-component/with-attr-map ~'attr-map
      ;;       result#))))))
  
      
;; (fn [attr-map arg1 arg2...] (
