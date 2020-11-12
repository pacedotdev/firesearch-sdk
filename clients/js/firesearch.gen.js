// Code generated by oto; DO NOT EDIT.

'use strict';

 
// AccessKeyService provides keys needed to perform searches.
export class AccessKeyService {
	
	// GenerateKey generates a key for an index path prefix to enable searches.
	async generateKey(generateKeyRequest) {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
		generateKeyRequest = generateKeyRequest || {}
		const response = await fetch('/oto/AccessKeyService.GenerateKey', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(generateKeyRequest)
		})
		return response.json().then(json => {
			if (json.error) {
				throw new Error(json.error)
			}
			return json
		})
	}
	
}
 
// AutocompleteService provides the ability to create and manage autocomplete
// indexes, as well as populate them with data, and perform lookups.
export class AutocompleteService {
	
	// CheckIndexName checks to see if an index name is available or not.
	async checkIndexName(checkAutocompleteIndexNameRequest) {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
		checkAutocompleteIndexNameRequest = checkAutocompleteIndexNameRequest || {}
		const response = await fetch('/oto/AutocompleteService.CheckIndexName', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(checkAutocompleteIndexNameRequest)
		})
		return response.json().then(json => {
			if (json.error) {
				throw new Error(json.error)
			}
			return json
		})
	}
	
	// CheckIndexPath checks to see if an AutocompleteIndexPath is valid for creating
// an index.
	async checkIndexPath(checkAutocompleteIndexPathRequest) {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
		checkAutocompleteIndexPathRequest = checkAutocompleteIndexPathRequest || {}
		const response = await fetch('/oto/AutocompleteService.CheckIndexPath', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(checkAutocompleteIndexPathRequest)
		})
		return response.json().then(json => {
			if (json.error) {
				throw new Error(json.error)
			}
			return json
		})
	}
	
	// Complete performs a search on an AutocompleteIndex.
	async complete(completeRequest) {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
		completeRequest = completeRequest || {}
		const response = await fetch('/oto/AutocompleteService.Complete', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(completeRequest)
		})
		return response.json().then(json => {
			if (json.error) {
				throw new Error(json.error)
			}
			return json
		})
	}
	
	// CreateIndex creates a new index.
	async createIndex(createAutocompleteIndexRequest) {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
		createAutocompleteIndexRequest = createAutocompleteIndexRequest || {}
		const response = await fetch('/oto/AutocompleteService.CreateIndex', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(createAutocompleteIndexRequest)
		})
		return response.json().then(json => {
			if (json.error) {
				throw new Error(json.error)
			}
			return json
		})
	}
	
	// DeleteDoc removes a document from an AutocompleteIndex. Once deleted, it will
// stop appearing in search results.
	async deleteDoc(deleteAutocompleteDocRequest) {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
		deleteAutocompleteDocRequest = deleteAutocompleteDocRequest || {}
		const response = await fetch('/oto/AutocompleteService.DeleteDoc', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(deleteAutocompleteDocRequest)
		})
		return response.json().then(json => {
			if (json.error) {
				throw new Error(json.error)
			}
			return json
		})
	}
	
	// DeleteIndex deletes the AutocompleteIndex. All index data, as well as any
// metadata about this AutocompleteIndex will be completely deleted.
	async deleteIndex(deleteAutocompleteIndexRequest) {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
		deleteAutocompleteIndexRequest = deleteAutocompleteIndexRequest || {}
		const response = await fetch('/oto/AutocompleteService.DeleteIndex', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(deleteAutocompleteIndexRequest)
		})
		return response.json().then(json => {
			if (json.error) {
				throw new Error(json.error)
			}
			return json
		})
	}
	
	// GetIndex gets an AutocompleteIndex.
	async getIndex(getAutocompleteIndexRequest) {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
		getAutocompleteIndexRequest = getAutocompleteIndexRequest || {}
		const response = await fetch('/oto/AutocompleteService.GetIndex', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(getAutocompleteIndexRequest)
		})
		return response.json().then(json => {
			if (json.error) {
				throw new Error(json.error)
			}
			return json
		})
	}
	
	// GetIndexes gets a list of AutocompleteIndexes.
	async getIndexes(getAutocompleteIndexesRequest) {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
		getAutocompleteIndexesRequest = getAutocompleteIndexesRequest || {}
		const response = await fetch('/oto/AutocompleteService.GetIndexes', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(getAutocompleteIndexesRequest)
		})
		return response.json().then(json => {
			if (json.error) {
				throw new Error(json.error)
			}
			return json
		})
	}
	
	// PutDoc puts a document into an AutocompleteIndex.
	async putDoc(putAutocompleteDocRequest) {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
		putAutocompleteDocRequest = putAutocompleteDocRequest || {}
		const response = await fetch('/oto/AutocompleteService.PutDoc', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(putAutocompleteDocRequest)
		})
		return response.json().then(json => {
			if (json.error) {
				throw new Error(json.error)
			}
			return json
		})
	}
	
}
 
// IndexService provides the ability to create and manage full-text indexes, as
// well as populate them with data, and perform searches.
export class IndexService {
	
	// CheckIndexName checks to see if an index name is available or not.
	async checkIndexName(checkIndexNameRequest) {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
		checkIndexNameRequest = checkIndexNameRequest || {}
		const response = await fetch('/oto/IndexService.CheckIndexName', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(checkIndexNameRequest)
		})
		return response.json().then(json => {
			if (json.error) {
				throw new Error(json.error)
			}
			return json
		})
	}
	
	// CheckIndexPath checks to see if an IndexPath is valid for creating an index.
	async checkIndexPath(checkIndexPathRequest) {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
		checkIndexPathRequest = checkIndexPathRequest || {}
		const response = await fetch('/oto/IndexService.CheckIndexPath', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(checkIndexPathRequest)
		})
		return response.json().then(json => {
			if (json.error) {
				throw new Error(json.error)
			}
			return json
		})
	}
	
	// CreateIndex creates a new index.
	async createIndex(createIndexRequest) {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
		createIndexRequest = createIndexRequest || {}
		const response = await fetch('/oto/IndexService.CreateIndex', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(createIndexRequest)
		})
		return response.json().then(json => {
			if (json.error) {
				throw new Error(json.error)
			}
			return json
		})
	}
	
	// DeleteDoc removes a document from an Index. Once deleted, it will stop appearing
// in search results.
	async deleteDoc(deleteDocRequest) {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
		deleteDocRequest = deleteDocRequest || {}
		const response = await fetch('/oto/IndexService.DeleteDoc', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(deleteDocRequest)
		})
		return response.json().then(json => {
			if (json.error) {
				throw new Error(json.error)
			}
			return json
		})
	}
	
	// DeleteIndex deletes the Index. All index data, as well as any metadata about
// this Index will be completely deleted.
	async deleteIndex(deleteIndexRequest) {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
		deleteIndexRequest = deleteIndexRequest || {}
		const response = await fetch('/oto/IndexService.DeleteIndex', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(deleteIndexRequest)
		})
		return response.json().then(json => {
			if (json.error) {
				throw new Error(json.error)
			}
			return json
		})
	}
	
	// GetIndex gets an Index.
	async getIndex(getIndexRequest) {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
		getIndexRequest = getIndexRequest || {}
		const response = await fetch('/oto/IndexService.GetIndex', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(getIndexRequest)
		})
		return response.json().then(json => {
			if (json.error) {
				throw new Error(json.error)
			}
			return json
		})
	}
	
	// GetIndexes gets a list of Indexes.
	async getIndexes(getIndexesRequest) {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
		getIndexesRequest = getIndexesRequest || {}
		const response = await fetch('/oto/IndexService.GetIndexes', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(getIndexesRequest)
		})
		return response.json().then(json => {
			if (json.error) {
				throw new Error(json.error)
			}
			return json
		})
	}
	
	// PutDoc puts a document into an Index.
	async putDoc(putDocRequest) {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
		putDocRequest = putDocRequest || {}
		const response = await fetch('/oto/IndexService.PutDoc', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(putDocRequest)
		})
		return response.json().then(json => {
			if (json.error) {
				throw new Error(json.error)
			}
			return json
		})
	}
	
	// Search performs a search on an Index.
	async search(searchRequest) {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
		searchRequest = searchRequest || {}
		const response = await fetch('/oto/IndexService.Search', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(searchRequest)
		})
		return response.json().then(json => {
			if (json.error) {
				throw new Error(json.error)
			}
			return json
		})
	}
	
}