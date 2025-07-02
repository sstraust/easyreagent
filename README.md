# EasyReagent

EasyReagent is a library of [Reagent](https://reagent-project.github.io) components that's designed to be, well, easy.

### Why EasyReagent?
- **We use the same (hiccup-like) syntax as Reagent**. It's easy to use, and you already know how to use it.
- **We support client+server components**. If you use the chat UI component, you can (optionally) import our server-side routes, and get a full messaging application that actually works.
- **It's not a big commitment.** You can use bits and pieces of this library without buying into our whole ecosystem. If you want just 1 component, you can use it and it works.

[Jump to Installation](#Installation)

## Basic Components
### Text Fields 
```clojure
(require '[easyreagent.components :as er])
(require '[reagent.core :as r])

(def field-value (r/atom ""))

;; field-value is kept up to date w/ what the user types into the text field
[er/text-field field-value]

;; text-areas
[er/text-area field-value]

;; custom styling
[er/text-field {:style {:width 300}} field-value]
```
### Other Types of Input
```clojure
;; checkbox
(def is-checked-atom (r/atom false))

[er/checkbox is-checked-atom]
;; with custom style
[er/checkbox {:class "checkbox"} is-checked-atom]

;; slider
(def current-value-atom (r/atom 5))
(def min-val 0)
(def max-val 10)

[er/slider current-value-atom min-val max-val]
;; with custom style
[er/slider {:style {:accent-color "green"}} current-value-atom min-val max-val]


```
### Timer
```clojure
;; Timer takes as input epoch milliseconds
;; Timer with 30 seconds
[er/timer (+ (.now js/Date) 30000)]

;; Timer with custom style
[er/timer {:style {:font-size 42
                   :color "green"}}
  (+ (.now js/Date) 30000)]
```
## Popup Menus

```clojure
(def is-shown (r/atom false))
;; you _must_ provide a map as the first argument here
;; optional style maps are not yet supported for popup menus
[er/popup-menu {} is-shown "Hi!"]

;; attach modal content to an existing element (display on hover)
;; this uses an anchor with  position:fixed, so the modal text
;; will display above other z-indexed content
[er/with-modal-info {:anchor-position :bottom
                       :style {:margin 50}}
   [:div modal-text]
   [:div {:style {:background-color "green"}} "main text"]]


;; The following create new elements and add them to the DOM.
;;   These are functions that _do_ something, and are not components

;; Create a popup
(er/create-popup (r/atom true) [:div "create-popup popup shown!!"])
;; Create an alert
(er/create-alert [:div  "Alert!"])
```
If you want something that's not listed here, lmk (open a github issue)

I want to make this a good library, and I _will_ build it :D

(within reason)

## Advanced Components
Advanced components are components that span both the client and the server.

An example is a comments section that contains the comments UI (i.e. a textbox, and a list of comments), but then _ALSO_ writes the comments to a database, and has a real backend.

### Chat Box
#### How to Use
```clojure
;; on the client-side
[easyreagent.fullstack.chat/chat-window "125"]

;; on the server side add this to your routes
(require '[easyreagentserver.fullstack.chat :as er-chat])
(defroutes routes
  er-chat/chat-routes)
  
;; by default EasyReagent uses Mongodb with db name "easyreagent-test" and table name "easyreagent-messages"
;; you can set these values to whatever you want by calling confgure db
(er-chat/configure-db "mydbname" "messages-table")
```

### Login Flow
```clojure
;; on the client-side
(require '[easyreagent.fullstack.login :as er-login])
[er-login/login-or-signup (r/atom ::er-login/signup)]

;; on the server side, add this to your routes
(require '[easyreagentserver.fullstack.login :as er-login])
(defroutes routes
	er-login/login-routes)
```

If you started your web server with er-server/run-web-server, this will use middleware to add :er-session-user (representing the currently logged in user) to every web request. If you start your server by other means, you can add it with ```er-login/wrap-session-user```

for example:
```
;; if you have this in your routes definition
(POST "/listUsersSavedInfo" params (list-users-saved-info params))
;; then you can do
(defn list-users-saved-info [{er-session-user :er-session-user :as params}]
;; do something with er-session-user, er-session-user is the database info for a user
;;  e.g. {:_id 123 (the mongodb id)  :e-mail "steve" (the username or e-mail of the user)}
```

## Customizing Styles
EasyReagent uses [DaisyUI](https://daisyui.com/) for most of its styling. This means it's easy to change the high-level design and layout of our components using DaisyUI themes, and tailwind configuration.

Additionally, most easyreagent accept a map, similar to hiccup, where you can pass in your own :class, and :style fields. In some cases, to make it easy to re-style deeply nested components, easyreagent defines also css classes that you can modify in your own css. In general, _you should not override these classes, unless they are explicitly documented as customizable_, because they may change during library development.

;; on the server side, add this to your routes
(require '[easyreagentserver.fullstack.login :as er-login])
(defroutes routes
	er-login/login-routes)
```

If you started your web server with er-server/run-web-server, this will use middleware to add :er-session-user (representing the currently logged in user) to every web request. If you start your server by other means, you can add it with ```er-login/wrap-session-user```

for example:
```
;; if you have this in your routes definition
(POST "/listUsersSavedInfo" params (list-users-saved-info params))
;; then you can do
(defn list-users-saved-info [{er-session-user :er-session-user :as params}]
;; do something with er-session-user, er-session-user is the database info for a user
;;  e.g. {:_id 123 (the mongodb id)  :id_str "steve" (the username or e-mail of the user)}
```

There are a few components that still use inline css, but as a library we try to stick to the convention that everything is defined using tailwind classes or new css classes.

# Installation
To get this library, add
```
io.github.sstraust/easyreagent {:git/url "https://github.com/sstraust/easyreagent.git"
                                         :git/sha "5cc59542e769dd90ef7d167cc48cac431b12bdeb"}
```
to your deps.edn file.


NOTE: Apps using this library must build with shadow-cljs

### Installing CSS Files

EasyReagent uses [DaisyUI](https://daisyui.com/) (a Tailwind library) for CSS. In order for the styling to work correctly, you need to:
- Use Tailwind
- Make sure tailwind knows about the easyreagent source paths. The easiest way to do this is to include your generated output files in the content section of your tailwind.config.js

i.e. if you shadow-cljs build outputs to a directory named  ```"./out"```, then you'll want to add 

```
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
    content: ["./src/**/*.{html,js,cljs}",
              "./out/**/*.{html,js,cljs}",
			  ...
}
```

to your tailwind config.

### Server-Side Components
In order for server-side components to work correctly, we recommend using easyreagentserver.core/run-web-server to start your server.

If you run it with your own custom configuration, you need to:
* Make sure your app uses the keywordize keys middleware 
* Includes the libraries for websockets


## Design philosophy

* Work well with existing tools. 
* Use vanilla reagent/CSS/styling when possible.
* Don't build new components unless you actually need it (if you want a button, it's ok to use the :button tag).



### For Developers
#### Testing the Library
Start the example app in example_app/(src/example_app/run_web_server.clj).

Load the file, and then call (run-web-server :dev)
