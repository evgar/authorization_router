import React from 'react'
import Home from './components/Home'
import Profile from './components/Profile'
import News from './components/News'
import Error from './components/Error'
import Navigation from './components/Navigation'
import Callback from './components/Callback'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

const App = props => {
  return (
    <section>
      <Router>
        <div className="wrapper">
          <Navigation classNAme="position-fixed" />
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return props.store.auth.isAuthenticated() ? <News /> : <Home />
              }}
            />
            <Route path="/profile" component={Profile} />
            <Route path="/news" component={News} />
            <Route path="/callback" component={Callback} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    </section>
  )
}

const mapStateToProps = state => ({ store: state })

export default connect(mapStateToProps)(App)
