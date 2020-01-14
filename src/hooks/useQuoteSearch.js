import { useEffect, useState } from 'react'
import axios from 'axios'

const useQuoteSearch = (searchPhrase, pageNumber) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [quotes, setQuotes] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setQuotes([])
  }, [searchPhrase])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: '/api/quotes/search',
      params: { q: searchPhrase, p: pageNumber },
      cancelToken: new axios.CancelToken(c => {
        cancel = c
      })
    })
      .then(res => {
        setQuotes(prevQuotes => {
          return [...prevQuotes, ...res.data.quotes]
        })
        setHasMore(res.data._metaData.pageCount > pageNumber)
        setTotalResults(res.data._metaData.resultCount)
        setLoading(false)
      })
      .catch(e => {
        if (axios.isCancel(e)) {
          return
        }
        setError(true)
      })
    return () => {
      cancel()
    }
  }, [searchPhrase, pageNumber])

  return { loading, error, quotes, setQuotes, totalResults, hasMore }
}

export default useQuoteSearch
