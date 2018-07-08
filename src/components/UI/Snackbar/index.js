import React, { Component } from 'react'

class Snackbar extends Component {
  render() {
    return (
      <div className='mdc-snackbar mdc-snackbar--align-start'
        aria-live='assertive'
        aria-atomic='true'
        aria-hidden='true'>
        <div className='mdc-snackbar__text mdc-typography--body1'></div>
        <div className='mdc-snackbar__action-wrapper'>
          <button type='button' className='mdc-snackbar__action-button'></button>
        </div>
      </div>      
    )
  }
}

export default Snackbar