import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Creators } from '@redux/actions'

import { Snackbars as SnackbarsComponent } from '@components/UI/Snackbars'

class Snackbars extends Component{  
  render() {
    return (
      <SnackbarsComponent></SnackbarsComponent>
    )
  }
}

const mapStateToProps = state => ({
  message: state.message,
  actionText: state.actionText,
  actionHandler: state.actionHandler
})

const mapDispatchToProps = dispatch => ({
  showSnackbar: (message, actionText, actionHandler) => dispatch(Creators.showSnackbar(message, actionText, actionHandler))
})

export default connect(mapStateToProps, mapDispatchToProps)(Snackbars)