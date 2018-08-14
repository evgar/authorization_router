import React, { Component } from 'react'
import { connect } from 'react-redux'

class Callback extends Component {
  componentDidMount() {
    this.props.store.auth.handleAuthentication()
  }

  render() {
    return <div>Loading ...</div>
  }
}

const mapStateToProps = state => ({ store: state })

export default connect(mapStateToProps)(Callback)
