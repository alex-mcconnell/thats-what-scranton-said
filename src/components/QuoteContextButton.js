import React from 'react'

const QuoteContextButton = ({ action, buttonText, topButton }) => {
  return (
    <div className="quote-context-button-container">
      <button className={`quote-context-button ${topButton ? 'topButton' : 'bottomButton'}`} onClick={e => action(e)}>
        <svg
          className={topButton ? 'upArrow' : null}
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
        </svg>
        <span>{buttonText}</span>
      </button>
    </div>
  )
}

export default QuoteContextButton
