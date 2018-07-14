import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Creators } from '@redux/actions'

import { DivSnackbar } from './styles'

class Snackbar extends Component {
  render() {
    return (
      <DivSnackbar className='mdc-snackbar mdc-snackbar--align-start'
        aria-live='assertive'
        aria-atomic='true'
        aria-hidden='true'
        isError={ this.props.isError }>
        <div className='mdc-snackbar__text mdc-typography--body1'></div>
        <div className='mdc-snackbar__action-wrapper'>
          <button type='button' className='mdc-snackbar__action-button'></button>
        </div>
      </DivSnackbar>      
    )
  }
}

const mapStateToProps = state => ({
  message: state.snackbar.message,
  actionText: state.snackbar.actionText,
  actionHandler: state.snackbar.actionHandler,
  isError: state.snackbar.isError
})

const mapDispatchToProps = dispatch => ({
  showSnackbar: (message, actionText, actionHandler, isError) => dispatch(Creators.showSnackbar(message, actionText, actionHandler, isError))
})

export default connect(mapStateToProps, mapDispatchToProps)(Snackbar)