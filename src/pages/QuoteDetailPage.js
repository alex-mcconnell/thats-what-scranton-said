import React, { useState } from 'react'
import QuoteList from '../components/QuoteList'
import QuoteContextButton from '../components/QuoteContextButton'
import useQuoteDetails from '../hooks/useQuoteDetails'

const QuoteDetailPage = props => {
  const [quoteId] = useState(props.location.state.quoteId)
  const [before, setBefore] = useState(0)
  const [after, setAfter] = useState(0)

  const { quotes, loading, error } = useQuoteDetails(quoteId, before, after)

  const handleContextChangeBack = e => {
    e.preventDefault()
    setBefore(prevBefore => {
      return (prevBefore += 1)
    })
  }
  const handleContextChangeForward = e => {
    e.preventDefault()
    setAfter(prevAfter => {
      return (prevAfter += 1)
    })
  }

  return (
    <>
      <QuoteContextButton action={handleContextChangeBack} buttonText="See quote before" topButton={true} />
      <QuoteList quotes={quotes} loading={loading} error={error} hasLinks={false} />
      <QuoteContextButton action={handleContextChangeForward} buttonText="See quote after" topButton={false} />
    </>
  )
}

export default QuoteDetailPage
