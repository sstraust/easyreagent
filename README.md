# EasyReagent

EasyReagent is currently _in development_. Stuff might not work yet, but we're working on it.

EasyReagent is a library of React components that's designed to be, well, easy.

Our goal is to provide a collection of _simple_, batteries-included components that look good by default. We use daisyui for styling.

## Components
### Text Fields 

```clojure
(require '[easyreagent.components :as er])
(require '[reagent.core :as r])

;; this can also take an r/atom if you need stuff to depend on it
(def field-value (atom ""))

;; field-value is kept up to date w/ what the user types into the text field
[er/text-field field-value]

;; text-areas
[er/text-area field-value]

;; custom styling
[er/text-field {:style {:width 300}} field-value]
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
```

## Styling
Easyreagent Components are styled to look nice using TailwindCSS and DaisyUI. 

To use the default styling, include resources/global_output.css in your HTML. If you want to use a custom theme, you can rebuild resources/easyreagent.css with your own tailwind.config.js.

## Design philosophy

Work well with existing tools. Let people use vanilla reagent/CSS/styling when possible. Rely on pure CSS components when they exist.

Don't build new react components unless you actually need it.
