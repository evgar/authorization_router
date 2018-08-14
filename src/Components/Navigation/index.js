import React, { Component, Fragment } from 'react'
// import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Navbar,
  NavLink,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'mdbreact'

class Navigation extends Component {
  handleEvent = e => {
    e.preventDefault()
    this.props.store.auth.login()
  }

  render() {
    return (
      <Navbar className="w-100" color="indigo" dark expand="md" fixed="top">
        {this.props.store.auth.isAuthenticated() ? (
          <Fragment>
            <NavbarNav left>
              <NavItem>
                <NavLink to="/profile">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">News</NavLink>
              </NavItem>
            </NavbarNav>
          </Fragment>
        ) : (
          <Fragment>
            <NavbarNav left>
              <NavItem>
                <NavLink to="" href="" onClick={e => this.handleEvent(e)}>
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/news">News</NavLink>
              </NavItem>
            </NavbarNav>
          </Fragment>
        )}
      </Navbar>
    )
  }
}

const mapStateToProps = state => ({ store: state })

export default connect(mapStateToProps)(Navigation)
