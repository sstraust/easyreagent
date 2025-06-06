(ns easyreagent.util)


(defmacro post-request [path params & {:keys [:success :failure :json-response]}]
  `(cljs.core.async/go
     (let [result# (cljs.core.async/<! (cljs-http.client/post ~path {:json-params ~params}))]
       (cond
         (= (:result (:body result#)) "success")
         ((or ~success identity))

         
         (= (:easyreagent-result-type (:body result#)) "json")
         ((or ~json-response identity) (:body result#))
         :else (~failure (:reason (:body result#)))))))
