#### Concepts

**Isomorphism**, or SSR for Server-Side Rendering, is used in modern reactive web applications so output pages are pre-populated with content, and therefore indexable by search engines, while still remaining highly dynamic in the browser.

**Most reactive frameworks** were designed for the browser only, and adding SSR is an afterthought. This makes [configuring SSR](https://www.digitalocean.com/community/tutorials/react-server-side-rendering) a complex process. In addition, a full blown server-side DOM emulation may be needed, which can significantly increase server load.

**Aremel** was designed from the start to support SSR with a lightweight server-side DOM and no addtional configuration.
