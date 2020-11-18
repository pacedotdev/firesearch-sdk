# Firesearch developer kits

Firesearch SDK, client libraries, and example code.

* The Firesearch API is approaching v1, until then these clients should be considered in beta

[![Firesearch is a serverless full text search solution](firesearch-overview.jpg)](https://firesearch.dev/)

## Clients

Firesearch clients allow you to interact with your instances
via Firesearch's API.

A simple way to integrate with Firesearch without dependency management
is to copy the client files directly into your own project.

* **Go** • [View source](./clients/go/firesearch/firesearch.gen.go) • [Example](examples/go-example)
* **Swift** • [View source](./clients/swift/Firesearch.gen.swift) • [Example](examples/swift-example)
* **TypeScript** • [View source](./clients/ts/firesearch.gen.ts)
* **JavaScript** • [View source](./clients/js/firesearch.gen.js) • [Example](examples/javascript-example)

### Go

* [Read the Official Go Client reference documentation](https://pkg.go.dev/github.com/pacedotdev/firesearch-sdk/clients/go/firesearch)

To use the official Go client:

```bash
go get github.com/pacedotdev/firesearch-sdk/clients/go/firesearch
```

* The Go client is maintained as a Go module
