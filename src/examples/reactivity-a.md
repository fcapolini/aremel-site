#### Reactivity

This example implements a seconds counter.

It uses a `count` logical value, an `on-count` value handler, and a reactive expression in page text.

Each time the `count` changes, the text expression is re-evaluated, and the text is automatically updated.

At the same time, the value handler is executed, and a further value change is scheduled to happen after one second.
