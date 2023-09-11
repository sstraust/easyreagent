# EasyReagent

EasyReagent is a library of React components that's designed to be, well, easy.

Our goal is to provide a collection of _simple_, batteries-included components that look good by default. We use daisyui for styling.

## Components
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

## Popup Menus

```clojure
(def is-shown (r/atom false))
[er/popup-menu is-shown]
```
