#### Data binding

This example loads a static JSON file and creates a list using its contents, specifically:

```json
{"list":[
    {"name":"Inbox", "count":3},
    {"name":"Drafts", "count":null},
    {"name":"Sent", "count":null},
    {"name":"Junk", "count":1}
]}
```

An initial data request is done in the server so the output page is content-ready. It can then be repeated in the client if needed to fetch updated data.
