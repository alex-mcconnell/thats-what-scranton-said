import React, { useState, useEffect } from 'react'

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [searchPhrase, setSearchPhrase] = useState(
    localStorage.getItem('searchPhrase') ? localStorage.getItem('searchPhrase') : ''
  )
  const [pageNumber, setPageNumber] = useState(1)
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <AppContext.Provider
      value={{
        searchPhrase,
        setSearchPhrase,
        pageNumber,
        setPageNumber,
        theme,
        setTheme
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
