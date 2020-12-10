from firesearch import Client, IndexService


def main():
    host = 'http://localhost:8080'
    apiKey = ''  # if you have security on
    client = Client(host, apiKey)
    indexService = IndexService(client)

    print('Adding some new documents')

    indexService.putDoc({
        'indexPath': 'firesearch-tutorial/indexes/movies-index',
        'doc': {
            'id': 'new-movie-4',
            'searchFields': [
                {'key': 'title', 'value': 'Tenet', 'store': True},
                {'key': 'directors',
                 'value': 'Christopher Nolan', 'store': True},
                {'key': 'genres', 'value': 'Action,Drama,Thriller,Spy,Adventure,Sci-fi', 'store': True},
            ]}
    })

    searchTerms = 'nolan'
    print('Searching for', searchTerms)
    searchResp = indexService.search({
        'query': {
            'indexPath': 'firesearch-tutorial/indexes/movies-index',
            'limit': 5,
            'text': searchTerms,
            'select': ['title'],
        }
    })

    for hit in searchResp.get('hits'):
        print()
        print(hit.get('id'))
        for f in hit.get('fields'):
            print(f.get('key'), f.get('value'))


if __name__ == '__main__':
    main()
