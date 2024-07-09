(defproject easyreagentserver "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [environ "1.2.0"]
                 [ring/ring "1.11.0-RC1"]
                 [bk/ring-gzip "0.3.0"]
                 [ring/ring-jetty-adapter "1.11.0-RC1"]
                 [org.ring-clojure/ring-websocket-protocols "1.11.0-RC1"]]
  :repl-options {:init-ns easyreagentserver.core})
