import React, { useState, createRef } from "react"
import { InstantSearch, connectStateResults } from "react-instantsearch-dom"

import algoliasearch from "algoliasearch/lite"
import { PoweredBy } from "./styles"
import SearchBox from "./search-box"
import Hits from "./hit"

const appID = process.env.GATSBY_ALGOLIA_APP_ID
const appKey = process.env.GATSBY_ALGOLIA_SEARCH_KEY

const Results = connectStateResults(({ searchState, searchResults, children }) => {
  return searchResults && 
    (searchResults.nbHits > 0)
    ? <>{children}</>
    : <h1>{`Sem resultados para '${searchState.query}'`}</h1>
})

const Search = ({ index, startValue = '' }) => {
  // const ref = createRef()
  const [query, setQuery] = useState(startValue)

  return (
    <InstantSearch
      searchClient={algoliasearch(appID, appKey)}
      indexName={index}
      onSearchStateChange={({ query }) => setQuery(query)}
      // root={{ Root, props: { ref } }}
      >
      <SearchBox startValue={startValue} />
        {query && (
          <Results key={name}>
            <Hits />
          </Results>
        )}
        <PoweredBy />
    </InstantSearch>
  )
}
export default Search