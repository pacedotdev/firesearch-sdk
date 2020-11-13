# Firesearch developer kits

Firesearch SDK, client libraries, and example code.

* The Firesearch API is approaching v1, until then these clients should be considered in beta

[![Firesearch is a serverless full text search solution](firesearch-overview.jpg)](https://firesearch.dev/)

## Clients

Firesearch clients allow you to interact with your instances
via Firesearch's API.

### No dependency management

A simple way to integrate with Firesearch without dependency management
is to copy the client files directly into your own project.

This is perfect for quickly hacking together an experiment.

* [Download Go client source code](./clients/go/firesearch.gen.go)
* [Download Swift client source code](./clients/swift/Firesearch.gen.swift)
* [Download TypeScript client source code](./clients/ts/firesearch.gen.ts)
* [Download JavaScript client source code](./clients/js/firesearch.gen.js)

As development matures, you should consider adopting a dependency manager.

### Go

To use the official Go client:

```bash
go get github.com/pacedotdev/firesearch-sdk/clients/go/firesearch
```

* The Go client is maintained as a Go module
