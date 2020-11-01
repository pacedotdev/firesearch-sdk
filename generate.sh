#!/bin/bash
oto -v \
	-template ./clients/go/client.go.plush -out ./clients/go/firesearch.gen.go \
	-pkg firesearch \
	../firesearch/cloudrun/oto
gofmt -w ./clients/go/firesearch.gen.go ./clients/go/firesearch.gen.go
oto -v \
	-template ./clients/swift/client.swift.plush -out ./clients/swift/Firesearch.gen.swift \
	-pkg firesearch \
	../firesearch/cloudrun/oto
