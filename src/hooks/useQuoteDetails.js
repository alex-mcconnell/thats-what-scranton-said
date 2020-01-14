import { useEffect, useState } from 'react'
import axios from 'axios'

const useQuoteDetails = (quoteId, before, after) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    setQuotes([])
  }, [before, after])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: `/api/quotes/${quoteId}/context/${before}/${after}`,
      cancelToken: new axios.CancelToken(c => {
        cancel = c
      })
    })
      .then(res => {
        setQuotes([...res.data.quotes])
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
  }, [before, after, quoteId])

  return { loading, error, quotes, before, after }
}

export default useQuoteDetails
