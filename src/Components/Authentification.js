import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { submitAuthorization } from "../store/actions";

class Authentification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: ""
    };

    this.login = "admin";
    this.password = "12345";
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleCredentialsSubmit = this.handleCredentialsSubmit.bind(this);
  }

  handleLoginChange({ target }) {
    this.setState({ login: target.value });
  }

  handlePasswordChange({ target }) {
    this.setState({ password: target.value });
  }

  handleCredentialsSubmit(e) {
    e.preventDefault();
    if (
      this.state.login === this.login &&
      this.state.password === this.password
    ) {
      console.log("PASSED");
      this.props.submitAuthorization();
    } else {
      console.log("OOOPS");
    }
  }

  render() {
    return this.props.store.isUserAuthorized ? (
      <Redirect to="/profile" />
    ) : (
      <div>
        <form>
          <h3>Autorization page</h3>
          <label>Login</label>
          <input type="text" onChange={this.handleLoginChange} />
          <label>Password</label>
          <input type="password" onChange={this.handlePasswordChange} />
          <button onClick={this.handleCredentialsSubmit}>Log in</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  submitAuthorization
};

const mapStateToProps = state => ({ store: state });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentification);
