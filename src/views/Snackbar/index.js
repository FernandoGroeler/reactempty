import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Creators } from '@redux/actions'

import { Snackbar as SnackbarComponent } from '@components/UI/Snackbar'

class Snackbar extends Component{  
  render() {
    return (
      <SnackbarComponent></SnackbarComponent>
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

export default connect(mapStateToProps, mapDispatchToProps)(Snackbar)