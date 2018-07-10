import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Creators } from '@redux/actions'

import {MDCSnackbar} from '@material/snackbar'
import {MDCDialog } from '@material/dialog'

import Snackbar from '@components/UI/Snackbar'
import Dialog from '@components/UI/Dialog'

import TextField from '@components/UI/TextField'
import Button from '@components/UI/Button'
import Switche from '@components/UI/Switche'

class Click extends Component{  
  constructor (props) {
    super(props)
    this.state = {
      newValue: props.newValue
    }
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState(state => ({ ...state, newValue: value }))
  }

  handleClickButton = () => {
    this.setState(state => ({ ...state, newValue: 'teste' }))
  }

  handleShowSnackbar = () => {
    const { message, actionText, actionHandler } = this.props.showSnackbar('Mensagem de teste', 'fechar', () => {})

    const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'))

    const dataObj = {
      message: message,
      actionText: actionText,
      actionHandler: actionHandler
    }

    snackbar.show(dataObj)
  }

  handleShowDialog = () => {
    const dialog = new MDCDialog(document.querySelector('#my-mdc-dialog'))

    dialog.listen('MDCDialog:accept', function() {
      console.log('accepted');
    })
    
    dialog.listen('MDCDialog:cancel', function() {
      console.log('canceled');
    })
    
    dialog.show();
  }

  render() {
    const { newValue } = this.state
    const { headerTitle, body } = this.props.showDialog('Titulo', newValue)

    return (
      <div>
        <TextField id='my-text-field' type='text' helperId='username-helper-text' labelText='Label' labelHelper='Label helper' onChange={ this.handleInputChange }></TextField>
        <Button labelText='Click me!' onClick={ this.handleClickButton }></Button>
        <Button labelText='Snackbar!' onClick={ this.handleShowSnackbar }></Button>
        <Button labelText='Dialog!' onClick={ this.handleShowDialog }></Button>
        <h6 id='mdc-typography' className='mdc-typography--headline6'>{ newValue }</h6>     
        <Switche />
        <Snackbar />   
        <Dialog headerTitle={ headerTitle } body={ body } />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  newValue: state.click.newValue
})

const mapDispatchToProps = dispatch => ({
  clickButton: newValue => dispatch(Creators.clickButton(newValue)),
  showSnackbar: (message, actionText, actionHandler) => dispatch(Creators.showSnackbar(message, actionText, actionHandler)),
  showDialog: (headerTitle, body) => dispatch(Creators.showDialog(headerTitle, body))
})

export default connect(mapStateToProps, mapDispatchToProps)(Click)