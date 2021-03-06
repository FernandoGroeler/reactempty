import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Creators } from '@redux/actions'

class Dialog extends Component {
  render() {
    return (
      <aside id='my-mdc-dialog'
        className='mdc-dialog'
        role='alertdialog'
        aria-labelledby='my-mdc-dialog-label'
        aria-describedby='my-mdc-dialog-description'>
        <div className='mdc-dialog__surface'>
          <header className='mdc-dialog__header'>
            <h2 id='my-mdc-dialog-label' className='mdc-dialog__header__title'>
              { this.props.headerTitle }
            </h2>
          </header>
          <section id='my-mdc-dialog-description' className='mdc-dialog__body mdc-typography--body1'>
            { this.props.body }
          </section>
          <footer className='mdc-dialog__footer'>
            <button type='button' className='mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel'>Recusar</button>
            <button type='button' className='mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept mdc-dialog__action'>Confirmar</button>
          </footer>
        </div>
        <div className='mdc-dialog__backdrop'></div>
      </aside>     
    )
  }
}

const mapStateToProps = state => ({
  headerTitle: state.dialog.headerTitle,
  body: state.dialog.body
})

const mapDispatchToProps = dispatch => ({
  showDialog: (headerTitle, body) => dispatch(Creators.showDialog(headerTitle, body))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dialog)