#### Concepts

**The `<:data-source>` tag** represents a source of data in the Aremel language.

**A data source** can perform automatic requests or can be used to interact with local or remote services using JSON, XML and even plain text (e.g. for Markdown contents).

**The `:data` attribute** specifies the *data context* of a tag: if it's an object the tag is visible, if it's `undefined` or `null` the tag is hidden, and if it's an array the tag is replicated.
