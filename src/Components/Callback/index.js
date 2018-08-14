import React, { Component } from 'react'
import { connect } from 'react-redux'

class Callback extends Component {
  componentDidMount() {
    this.props.store.auth.handleAuthentication()
  }

  render() {
    return <div className="spinner" />
  }
}

const mapStateToProps = state => ({ store: state })

export default connect(mapStateToProps)(Callback)
