package main

import (
	"context"
	"errors"
	"flag"
	"fmt"
	"os"
	"os/signal"

	"github.com/pacedotdev/firesearch-sdk/clients/go/firesearch"
)

func run(ctx context.Context, args []string) error {
	flags := flag.NewFlagSet(args[0], flag.ContinueOnError)
	var (
		endpoint  = flags.String("endpoint", "http://localhost:8888/api", "Firesearch API endpoint")
		secret    = flags.String("secret", "", "Secret API key")
		indexPath = flags.String("index", "firesearch-tutorial/indexes/movies-index", "Firesearch index path")
	)
	if err := flags.Parse(args[1:]); err != nil {
		return err
	}
	if *endpoint == "" {
		return errors.New("missing endpoint")
	}
	if *indexPath == "" {
		return errors.New("missing indexPath")
	}
	client := firesearch.NewClient(*endpoint, *secret)
	indexService := firesearch.NewIndexService(client)
	// add a new movie
	fmt.Println("Adding new document new-movie-1 \"Tenet\"...")
	_, err := indexService.PutDoc(ctx, firesearch.PutDocRequest{
		IndexPath: *indexPath,
		Doc: firesearch.Doc{
			ID: "new-movie-1",
			SearchFields: []firesearch.SearchField{
				{
					Key:   "title",
					Value: "Tenet",
					Store: true,
				},
				{
					Key:   "directors",
					Value: "Christopher Nolan",
					Store: true,
				},
				{
					Key:   "genres",
					Value: "Action,Drama,Thriller,Spy,Adventure,Sci-fi",
					Store: true,
				},
			},
		},
	})
	if err != nil {
		return err
	}
	// search
	fmt.Println("Searching...")
	searchTerms := "nolan"
	searchResp, err := indexService.Search(ctx, firesearch.SearchRequest{
		Query: firesearch.SearchQuery{
			IndexPath: *indexPath,
			Limit:     5,
			Text:      searchTerms,
			Select:    []string{"title"},
		},
	})
	if err != nil {
		return err
	}
	fmt.Printf("Search for \"%s\" returned %d results (in %dms)\n\n", searchTerms, len(searchResp.Hits), searchResp.Duration)
	for _, hit := range searchResp.Hits {
		title, ok := hit.FieldValue("title")
		if !ok {
			title = "Untitled"
		}
		fmt.Printf("\t%s: %s:", hit.ID, title)
		for _, highlight := range hit.Highlights {
			fmt.Print(" " + highlight.Text)
		}
		fmt.Println()
	}
	fmt.Println()
	return nil
}

func main() {
	ctx := context.Background()
	// trap Ctrl+C and call cancel on the context
	ctx, cancel := context.WithCancel(ctx)
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)
	defer func() {
		signal.Stop(c)
		cancel()
	}()
	go func() {
		select {
		case <-c:
			cancel()
		case <-ctx.Done():
		}
	}()
	if err := run(ctx, os.Args); err != nil {
		fmt.Fprintf(os.Stderr, "%v\n", err)
		os.Exit(1)
	}
}
