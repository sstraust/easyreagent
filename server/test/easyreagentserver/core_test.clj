(ns easyreagentserver.core-test
  (:require
   [clojure.test :refer :all]
   [easyreagentserver.core :refer :all]
   [easyreagentserver.fullstack.config :as config]
   [easyreagentserver.fullstack.db :as er-db]
   [easyreagentserver.fullstack.login :as er-login]
   [monger.collection :as mc]
   [monger.core :as mg])
  (:import
   [de.flapdoodle.embed.mongo MongodStarter]
   [de.flapdoodle.embed.mongo.config MongodConfig Net]
   [de.flapdoodle.embed.mongo.distribution Version$Main]
   [de.flapdoodle.embed.process.runtime Network]))


(def test-port 37018)
(defonce ^:private mongod-process (atom nil))

(defn start-embedded-mongo []
  (let [starter (MongodStarter/getDefaultInstance)
        config (-> (MongodConfig/builder)
                   (.version Version$Main/PRODUCTION)
                   (.net (Net. "localhost" test-port (Network/localhostIsIPv6)))
                   .build)
        executable (.prepare starter config)]
    (reset! mongod-process (.start executable))))

(defn stop-embedded-mongo []
  (when-let [p @mongod-process]
    (.stop p)
    (reset! mongod-process nil)))

(use-fixtures :once
  (fn [f]
    (try
      (start-embedded-mongo)
      (let [conn  (mg/connect {:host "localhost" :port test-port})
            db (mg/get-db conn "easyreagent-test")]
        (config/configure-fullstack-components
         {:db db}))
      (f)
      (finally
        (stop-embedded-mongo)))))


(deftest verify-mongo-setup
  (testing "verify that the mongodb login table is empty"
    (is (= (mc/count @er-db/db @er-login/users-table) 0))))



(defprotocol CountProtocol
  (inc-and-return [this]))
(defrecord Counter [count-atom]
  CountProtocol
  (inc-and-return [this]
    (swap! count-atom inc)
    @count-atom))

(deftest cache-to-db-test
  (testing "counter counts without cache"
    (let [counter (Counter. (atom 0))]
      (is (= ((fn [] (inc-and-return counter)))
             1))
      (is (= ((fn [] (inc-and-return counter)))
             2))))
  (testing "verify that caching works correctly"
    (let [counter (Counter. (atom 0))]
      ;; counter is called 1 time because it doesn't cache
      (is (= ((cache-to-db (fn [] (inc-and-return counter)) "counter-table"))
             1))
      ;; caching a second time returns the same result
      (is (= ((cache-to-db (fn [] (inc-and-return counter)) "counter-table"))
             1))))
  (testing "verify that it does not cache different args"
    (let [counter (Counter. (atom 0))
          cached-fn (cache-to-db (fn [unused-arg] (inc-and-return counter)) "counter-table")]
      (is (= (cached-fn "hi") 1))
      (is (= (cached-fn "hi2") 2))
      (is (= (cached-fn "hi3") 3))
      ;; if you pass in the same arg, it still returns the same
      ;; value as it did previously
      (is (= (cached-fn "hi2") 2))))
  ;; TODO finish this method
  (testing "verify that ttl expires"
    (let [curr-time-atom (atom 0)
          counter (Counter. (atom 0))
          ;; need to use a different table name, because it is not reset between tests
          cached-fn (cache-to-db (fn [] (inc-and-return counter)) "counter-table2" :ttl-millis 100)]
      (with-redefs [current-time-millis (fn [] @curr-time-atom)]
        (is (= (cached-fn) 1))
        (is (= (cached-fn) 1))
        (reset! curr-time-atom 99)
        (is (= (cached-fn) 1))
        ;; expire the ttl
        (reset! curr-time-atom 101)
        (is (= (cached-fn) 2))))))

;; (run-tests 'easyreagentserver.core-test)
