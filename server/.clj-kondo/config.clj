(ns config)


(defmacro create-component-config [key & args]
  (let [args-list (partition 2 args)]
    `(do
      ~@(for [[var-name var-implementation] args-list]
          `(do (def ~var-name (atom ~(:default-value var-implementation)))
               (add-to-args-map ~key '~var-name ~var-name))))))
