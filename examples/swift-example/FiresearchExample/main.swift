//
//  main.swift
//  FiresearchExample
//
//  Created by Mat Ryer on 13/11/2020.
//

/*
 
    Welcome to the Firesesarch Swift example.
 
    This code runs assuming you are running Firesearch locally, and have
    just completed the Live tutorial.
 
    To get started: https://firesearch.dev/docs/tutorial 
 
    Specifically, the firesearch-tutorial/indexes/movies-index index
    must exist.
 
    Get in touch if you have any questions.
 
    Open an issue: https://github.com/pacedotdev/firesearch-sdk
    or drop us an email: hello@firesearch.dev
 
 */

import Foundation

let indexPath = "firesearch-tutorial/indexes/movies-index"
let searchTerms = "Nolan"

let client = Client(withEndpoint: "http://localhost:8888/api")
let indexService = IndexService(withClient: client)

print("Firesearch Swift example")

let putDocRequest = PutDocRequest(
    indexPath: indexPath,
    doc: Doc(
        id: "new-movie-3",
        searchFields: [
            SearchField(
                key: "title",
                value: "Tenet", store: true
            ),
            SearchField(
                key: "directors",
                value: "Christopher Nolan", store: true
            ),
            SearchField(
                key: "genres",
                value: "Action,Drama,Thriller,Spy,Adventure,Sci-fi", store: true
            )
        ],
        fields: nil
    )
)

print("Adding a new movie...")
indexService.putDoc(withRequest: putDocRequest) { (putDocResponse: PutDocResponse?, err: Error?) in
    if let otoErr = err as? OtoError {
        print("ERROR: \(otoErr.errorDescription!)")
        return
    } else if err != nil {
        print("ERROR: \(err!)")
        return
    }
}


let searchRequest = SearchRequest(
    query: SearchQuery(
        indexPath: indexPath,
        limit: 5,
        text: searchTerms,
        select: ["title"],
        searchFields: nil,
        cursor: ""
    )
)
print("Searching for \(searchTerms)")
indexService.search(withRequest: searchRequest) { (searchResponse: SearchResponse?, err: Error?) in
    if let otoErr = err as? OtoError {
        print("ERROR: \(otoErr.errorDescription!)")
        return
    } else if err != nil {
        print("ERROR: \(err!)")
        return
    }
    print("Showing \(searchResponse!.hits!.count) result(s) in \(searchResponse!.duration!)ms")
    print("")
    searchResponse!.hits?.forEach({ (hit: SearchResult) in
        let title = hit.valueField(key: "title")
        print("\t\(hit.id!): \(title!)")
        hit.highlights?.forEach({ (highlight: Highlight) in
            print("\t\(highlight.field!): \(highlight.text!)")
        })
        print("")
    })
    print("Thanks for trying Firesearch.")
}

sleep(5)
