#### Concepts

**Logic values** can be added to any tag using attributes prefixed with `:`. They're added to page's JavaScript code behind the scenes by Aremel's server and are omitted in the output HTML.

**Reactive expressions**, surrounded by the `[[` and `]]` markers, can be placed anywhere in attributes and text. They can reference logic values and are re-evaluated when values change. They're replaced with their resulting value in the output HTML.
