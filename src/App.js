import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { AppProvider } from './contexts/AppContext'

import Layout from './pages/Layout'
import SearchPage from './pages/SearchPage'
import QuoteDetailPage from './pages/QuoteDetailPage'
// import BuyMeACoffee from './components/BuyMeACoffee'

const App = () => {
  return (
    <AppProvider>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/quote-details" component={QuoteDetailPage} />
            <Redirect to="/" />
          </Switch>
        </Router>
        {/* <BuyMeACoffee></BuyMeACoffee> */}
      </Layout>
    </AppProvider>
  )
}

export default App
