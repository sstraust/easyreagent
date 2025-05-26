(ns easyreagentserver.send-email
  (:require [clj-http.client :as client]
            [cheshire.core :as json]
            [clojure.string :as str]))

(def sendgrid-api-key (atom nil))

(defn set-sendgrid-key-from-env []
  (reset! sendgrid-api-key (System/getenv "SENDGRID_API_KEY")))

(defn email-enabled? []
  (not (nil? @sendgrid-api-key)))

(defn send-email
  "Sends an email using SendGrid API.
   Returns a map with :success? and either :result or :error."
  [to subject body]
  (try
    ;; Basic validation
    (cond
      (str/blank? subject)
      {:success? false :error "Subject cannot be empty"}
      
      (str/blank? body)
      {:success? false :error "Body cannot be empty"}
      
      :else
      (let [api-key @sendgrid-api-key
            ;; TODO: Change the from-email and from name
            ;; to be something more specific
            from-email "alert@alertonanything.com"
            from-name "Alert On Anything"
            request-body {:personalizations [{:to [{:email to}]}]
                          :from {:email from-email :name from-name}
                          :subject subject
                          :content [{:type "text/plain" :value body}]}
            response (client/post "https://api.sendgrid.com/v3/mail/send"
                        {:body (json/generate-string request-body)
                         :headers {"Authorization" (str "Bearer " api-key)
                                   "Content-Type" "application/json"}
                         :throw-exceptions false})]
        (if (= 202 (:status response))
          {:success? true :result response}
          {:success? false :error (str "API error: " (:status response) " - " (:body response))})))
    (catch Exception e
      {:success? false :error (str "Exception while sending email: " (.getMessage e))})))
