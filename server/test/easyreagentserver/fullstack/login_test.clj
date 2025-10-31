(ns easyreagentserver.fullstack.login-test
  (:require
   [clojure.data.json :as json]
   [clojure.test :refer :all]
   [easyreagentserver.fixtures.setup-mongo-fixture :as setup-mongo-fixture]
   [easyreagentserver.fullstack.login :as login]
   [easyreagentserver.fullstack.db :refer [db]]
   [monger.collection :as mc]
   [slib.core :refer :all]
   [spicyclojuremacros.core :refer [setf with-vars]])
  (:import [org.bson.types ObjectId]))


(use-fixtures :each setup-mongo-fixture/setup-embedded-mongo-fixture)

(deftest user-can-create-account
  (testing "test full user create an account, get auth user and sign in"
    (let [signup-result (login/submit-signup-action
                           {:params {:username "test_user"
                                     :password "test_pass"}})
          session-id (:id-str (:session signup-result))]
      (is (= (json/read-str
              (:body signup-result)
              :key-fn keyword)
             {:result "success"}))
      (is (not (empty? (:id-str (:session signup-result)))))


      ;; now I want to test that I can get the current user
      (is (= (json/read-str
              (:body ((login/wrap-session-user login/get-current-user)
                      {:session (:session signup-result)}))
              :key-fn keyword)
             {:email "test_user"
              :easyreagent-result-type "json"}))

      (let [login-result (login/submit-login-action
                          {:params {:username "test_user"
                                    :password "test_pass"}})]
        (is (= (json/read-str
                (:body login-result)
                :key-fn keyword)
               {:result "success"}))
        (is (= (:id-str (:session login-result))
               session-id)))
      (let [logout-result (login/logout {:session (:session signup-result)})]
        (is (= (json/read-str
                (:body logout-result)
                :key-fn keyword)
               {:result "success"}))
        (is (= (:id-str (:session logout-result))
               nil))))))
