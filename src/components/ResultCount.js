import React from 'react'

const ResultCount = ({ totalResults, shouldDisplay }) => {
  return totalResults >= 0 && shouldDisplay ? (
    <p className="quote-total-result-count">
      {totalResults} quote{totalResults === 1 ? '' : 's'} found.
    </p>
  ) : null
}

export default ResultCount
