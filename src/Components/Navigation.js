import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Navigation extends Component {
  isAuthorized({ isUserAuthorized }) {
    if (isUserAuthorized) {
      return "/profile";
    } else {
      return "/authentification";
    }
  }

  render() {
    return (
      <div>
        <NavLink to={this.isAuthorized(this.props.store.isUserAuthorized)}>
          Profile
        </NavLink>
        <NavLink to="/news">News</NavLink>
      </div>
    );
  }
}

const mapStateToProps = state => ({ store: state });

export default connect(mapStateToProps)(Navigation);
