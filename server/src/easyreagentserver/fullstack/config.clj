(ns easyreagentserver.fullstack.config)


(def args-map (atom {}))
(defn add-to-args-map [component-kwd var-name var]
  (let [map-path (if (= component-kwd :top-level)
                   [(keyword var-name)]
                   [component-kwd (keyword var-name)])]
    (when (get-in @args-map map-path)
      (throw (ex-info "cannot add duplicate key to easyreagent config" {:key map-path})))
    (swap! args-map assoc-in map-path var)))

(defmacro create-component-config [key & args]
  (let [args-list (partition 2 args)]
    `(do
      ~@(for [[var-name var-implementation] args-list]
          `(do (def ~var-name (atom ~(:default-value var-implementation)))
               (add-to-args-map ~key '~var-name ~var-name))))))

(defn deep-merge
  [& maps]
  (letfn [(merge-fn [& values]
            (if (every? map? values)
              (apply merge-with merge-fn values)
              values))]
    (apply merge-with merge-fn maps)))

(defn walk-vals [func m]
  (if (map? m)
    (doall (map #(walk-vals func %) (vals m)))
    (func m)))


(defn configure-fullstack-components [options]
  (let [aligned-args (deep-merge @args-map options)]
    (walk-vals (fn [args] (when (= (count args) 2)
                            (reset! (first args) (second args))))
               aligned-args)))
