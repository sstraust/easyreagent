(ns easyreagent.
  (:require-macros [easyreagent.request-macros])
  (:require [cljs.core.async :refer-macros [go]]
            [cljs-http.client :as http]))
