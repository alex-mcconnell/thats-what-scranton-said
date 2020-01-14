import React, { useState, useContext, useRef, useCallback } from 'react'
import { withRouter } from 'react-router'

import { AppContext } from '../contexts/AppContext'
import useQuoteSearch from '../hooks/useQuoteSearch'

import SearchBar from '../components/SearchBar'
import QuoteList from '../components/QuoteList'
import ResultCount from '../components/ResultCount'
import BackToTop from '../components/BackToTop'

const SearchPage = () => {
  const { searchPhrase, setSearchPhrase, pageNumber, setPageNumber } = useContext(AppContext)
  const { quotes, setQuotes, totalResults, hasMore, loading, error } = useQuoteSearch(searchPhrase, pageNumber)

  const [searchBarVisible, setSearchBarVisible] = useState(true)

  const observer = useRef()
  const lastQuoteElementRef = useCallback(
    node => {
      if (loading) {
        return
      }

      if (observer.current) {
        observer.current.disconnect()
      }

      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNumber => prevPageNumber + 1)
        }
      })

      if (node) {
        observer.current.observe(node)
      }
    },
    [loading, hasMore, setPageNumber]
  )

  const searchbarObs = useRef()
  const searchbarRef = useCallback(
    node => {
      if (loading) {
        return
      }

      if (searchbarObs.current) {
        searchbarObs.current.disconnect()
      }

      searchbarObs.current = new IntersectionObserver(entries => {
        setSearchBarVisible(entries[0].isIntersecting)
      })

      if (node) {
        searchbarObs.current.observe(node)
      }
    },
    [loading]
  )

  const handleSearch = (e, searchText) => {
    e.preventDefault()
    if (searchText !== searchPhrase) {
      localStorage.searchPhrase = searchText
      setQuotes([])
      setPageNumber(1)
      setSearchPhrase(searchText)
    }
  }

  return (
    <>
      <SearchBar value={searchPhrase} onChange={handleSearch} ref={searchbarRef} />
      <ResultCount totalResults={totalResults} shouldDisplay={searchPhrase.length >= 4}></ResultCount>
      <QuoteList
        quotes={quotes}
        lastQuoteElementRef={lastQuoteElementRef}
        searchPhrase={searchPhrase}
        hasLinks={true}
        loading={loading}
        error={error}
      />
      <BackToTop show={!searchBarVisible}></BackToTop>
    </>
  )
}

export default withRouter(SearchPage)
