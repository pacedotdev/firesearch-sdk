#!/bin/bash
oto -v \
	-template ./clients/go/firesearch/client.go.plush -out ./clients/go/firesearch/firesearch.gen.go \
	-pkg firesearch \
	../firesearch/cloudrun/oto
gofmt -w ./clients/go/firesearch/firesearch.gen.go ./clients/go/firesearch/firesearch.gen.go
oto -v \
	-template ./clients/swift/client.swift.plush -out ./clients/swift/Firesearch.gen.swift \
	-pkg firesearch \
	../firesearch/cloudrun/oto
oto -v \
	-template ./clients/ts/client.ts.plush -out ./clients/ts/firesearch.gen.ts \
	-pkg firesearch \
	../firesearch/cloudrun/oto
oto -v \
	-template ./clients/js/client.js.plush -out ./clients/js/firesearch.gen.js \
	-pkg firesearch \
	../firesearch/cloudrun/oto
