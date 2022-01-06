#### Isomorphism

We'll use the previous example to illustrate how isomorphism works in Aremel.

**Server-side**, `count` is initialized to zero and its value is reflected in the page thanks to the `[[count]]` expression. `on-count` is also executed, but it uses `setTimeout` which is ignored since everything in the future is left to the browser. So the output page contains *Isomorphic counter: 0*.

**Browser-side** the page is immediately displayed with *Isomorphic counter: 0* while the Aremel runtime is asynchronously loaded. When it's ready, the same process is repeated but now `setTimeout` works and `count` gets incremented every second.