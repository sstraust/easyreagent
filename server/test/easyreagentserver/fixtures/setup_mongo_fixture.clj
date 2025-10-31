(ns easyreagentserver.fixtures.setup-mongo-fixture
  (:require [monger.core :as mg]
            [easyreagentserver.fullstack.config :as config])
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


(defn setup-embedded-mongo-fixture [f]
  (try
      (start-embedded-mongo)
      (let [conn  (mg/connect {:host "localhost" :port test-port})
            db (mg/get-db conn "easyreagent-test")]
        (config/configure-fullstack-components
         {:db db}))
      (f)
      (finally
        (stop-embedded-mongo))))

