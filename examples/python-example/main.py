from firesearch import Client, IndexService, OtoError


def main():
    host = 'http://localhost:8888'
    apiKey = ''  # if you have security on
    client = Client(host, apiKey)
    indexService = IndexService(client)

    print('Adding some new documents')

    try:
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
    except OtoError as e:
        print('some error')
        print(e)

    try:
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
            print(hit.get('id'))
            for f in hit.get('fields'):
                print(f.get('key'), f.get('value'))
    except OtoError as e:
        print('some error')
        print(e)


if __name__ == '__main__':
    main()
