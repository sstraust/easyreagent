# EasyReagent

EasyReagent is a library of [Reagent](https://reagent-project.github.io) components that's designed to be, well, easy.

### Why EasyReagent?
- **We use the same (hiccup-like) syntax as Reagent**. It's easy to use, and you know how to use it.
- **We support client+server components**. This means if you use our chatbox UI component, you _also_ get a full messaging app that actually works.
- **It's not a big commitment.** You can use bits and pieces of this library without buying into our whole ecosystem. If you want just 1 component, you can use it and it works. If you want just the client-side of a client-server component, you can do that as well.

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
< doesn't exist yet>



# Installation
To get this library, add
```
io.github.sstraust/easyreagent {:git/url "https://github.com/sstraust/easyreagent.git"
                                         :git/sha "5cc59542e769dd90ef7d167cc48cac431b12bdeb"}
```
to your deps.edn file.


NOTE: Apps using this library must build with shadow-cljs
_and_ that your app uses the keywordize keys middleware
_and_ app needs to include the libraries for websockets
(for the server-side websocket versions of stuff to work)

### Installing CSS Files
To get our stylining, download the file easyreagent.css, and import it from your main CSS file.

EasyReagent uses [DaisyUI](https://daisyui.com/) (a Tailwind library) for CSS. You want easyreagent.css to be in the list of 'content' files in your tailwind.config.js.

You're not required to use the same styling as we do, but if you don't use daisyUI, some styles might not look as nice. 

## Selling Points

- **We use the same (hiccup-like) syntax as Reagent**. If you know how to use Reagent, you'll know how to use this library.
- **We support client+server components**. This means you can use our chatbox UI component, but _also_ get a full messaging app implementation.
- **It's not a big commitment.** You can use bits and pieces of this library without buying into our whole ecosystem. If you want just 1 component, you can use it and it works. If you want just the client-side of a client-server component, you can do that as well.

Demos: [sprinklz.io](https://sprinklz.io), [wordfinder9000](https://wordfinder9000.com/)


## Design philosophy

* Work well with existing tools. 
* Use vanilla reagent/CSS/styling when possible.
* Don't build new components unless you actually need it (if you want a button, it's ok to use the :button tag).



### For Developers
#### Testing the Library
Start the example app in example_app/(src/example_app/run_web_server.clj).

Load the file, and then call (run-web-server :dev)
