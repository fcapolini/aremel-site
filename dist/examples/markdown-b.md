#### Concepts

**Markdown** content can be rendered in Aremel pages using the `<markdown-div>` component.

**In order to support isomorphism**, we need to be able to render the content in both the server and the client. This is done by using the server and client variants of the [Showdown](http://showdownjs.com/) library.

**The client variant** is only added if `markdown-div.htm` is imported.