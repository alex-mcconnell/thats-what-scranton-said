import React, { useEffect, useRef, useState } from 'react'
import useOnScreen from '../hooks/useOnScreen'

const SearchBar = React.forwardRef(({ value, onChange }, ref) => {
  const refSearchBarContainer = useRef(null)
  const onScreen = useOnScreen(refSearchBarContainer)
  const [searchText, setSearchText] = useState(value)

  useEffect(() => {
    document.querySelector('.quote-search-bar').focus()
  }, [])

  useEffect(() => {
    if (onScreen) {
      document.querySelector('.quote-search-bar').inputMode = 'search'
    } else {
      document.querySelector('.quote-search-bar').inputMode = 'none'
    }
  }, [onScreen])

  return (
    <form className="quote-search-bar-container" onSubmit={e => onChange(e, searchText)} ref={ref}>
      <input
        ref={refSearchBarContainer}
        className="quote-search-bar"
        type="text"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        aria-label="Search Quote"
        placeholder="Search for a quote"
      ></input>
      <button className="quote-search-bar-button" type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
      </button>
    </form>
  )
})

export default SearchBar
