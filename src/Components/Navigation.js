import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Navigation extends Component {

  handleEvent = e => {
    e.preventDefault()
    this.props.store.auth.login()
  }

  render() {
    return (
      <div>
        {this.props.store.auth.isAuthenticated() ? (
          <Fragment>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/">News</NavLink>
          </Fragment>
        ) : (
          <Fragment>
            <NavLink to="" href="" onClick={e => this.handleEvent(e)}>
              Profile
            </NavLink>
            <NavLink to="/news">News</NavLink>
          </Fragment>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({ store: state })

export default connect(mapStateToProps)(Navigation)
