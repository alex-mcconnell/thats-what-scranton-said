import React from 'react'
import Quote from '../components/Quote'
import Loading from './Loading'

const QuoteList = ({ quotes, lastQuoteElementRef, searchPhrase, hasLinks, loading, error }) => {
  return (
    <>
      {quotes.map((quote, index) => {
        const quoteKey = quote.season + '' + quote.episode + '' + quote.scene + '' + quote.order
        return (
          <Quote
            key={quoteKey}
            quoteId={quoteKey}
            quote={quote}
            ref={quotes.length === index + 1 ? lastQuoteElementRef : null}
            searchPhrase={searchPhrase}
            isLink={hasLinks}
          />
        )
      })}
      {loading || error ? (
        <div className="quote-list-message-container">
          <div>{loading && !error && <Loading></Loading>}</div>
          <div>{error && 'Oops! Something went wrong...'}</div>
        </div>
      ) : null}
    </>
  )
}

export default QuoteList
