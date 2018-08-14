import React from 'react'
import Home from './Components/Home/index'
import Profile from './Components/Profile/index'
import News from './Components/News/index'
import Error from './Components/Error/index'
import Navigation from './Components/Navigation/index'
import Callback from './Components/Callback/index'
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
