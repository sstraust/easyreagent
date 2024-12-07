(ns easyreagentserver.phone-util
  (:require [easyreagentserver.core :as er-server]
            [libpython-clj2.python :as py]
            [libpython-clj2.require :refer [require-python]]
            [clojure.core.async :refer [chan go >!]])
  (:import com.twilio.type.PhoneNumber
           com.twilio.rest.api.v2010.account.Message
           com.google.i18n.phonenumbers.NumberParseException
           com.google.i18n.phonenumbers.PhoneNumberUtil))



;; send-sms should be refactored into
;; send-message user  :message
;; that just takes in a user and sends them the message
;; however you're supposed to send it
(def dev-sms-channel (atom []))
(def dev-zulip-channel (atom []))

(defn send-sms [number message]
  (if (= @er-server/MODE :dev)
    (do (println "[dev] sending sms " number message)
        (swap! dev-sms-channel conj {:number number
                                     :message message}))
    (.create
     (Message/creator
      (PhoneNumber. number)
      (PhoneNumber. "+18559611409")
      message))))

(defn is-number-valid? [phone-number-string]
    (try 
      (let [region "US"
            phone-util (PhoneNumberUtil/getInstance)
            phone-number (.parse phone-util phone-number-string region)]
        (and (re-matches #"^\+\d+([- .()]*\d+)*$" phone-number-string)
             (.isValidNumber phone-util phone-number)))
      (catch NumberParseException e
        (do false))))


(require-python 'zulip)
(def client (delay (when (not (= @er-server/MODE :dev))
              (zulip/Client :config_file "zuliprc"))))

(defn send-zulip [zulip-id message]
  (let [zulip-contents {"type" "private"
                        "to" zulip-id 
                        "content" message}]
  (if (= @er-server/MODE :dev)
    (do 
      (println "sending to zulip user" zulip-contents)
      (swap! dev-zulip-channel conj zulip-contents))
    (py/py. @client send_message
      zulip-contents))))
;; (send-zulip "sam.t.straus@gmail.com" "hi")

(defn send-zulip-to-channel [user event message]
  (let [zulip-contents {"type" "stream"
                        "to" (:channel user)
                        "topic" (:title event)
                        "content" message}]
  (if (= @er-server/MODE :dev)
    (do (println "sending to zulip channel" zulip-contents)
        (swap! dev-zulip-channel conj zulip-contents))
    (py/py. @client send_message zulip-contents))))


(defn send-message [user event message]
  (when (not (empty? (:zulip-id user)))
    (send-zulip (:zulip-id user) message))
  (when (not (empty? (:phone-number user)))
    (send-sms (:phone-number user) message))
  (when (not (empty? (:channel user)))
    (send-zulip-to-channel user event message))
  )

