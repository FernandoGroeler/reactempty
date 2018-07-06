import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Creators } from '@redux/actions'
import {MDCSnackbar} from '@material/snackbar'
import Snackbar from '@components/UI/Snackbar'

import TextField from '@components/UI/TextField'
import Button from '@components/UI/Button'

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

  render() {
    const { newValue } = this.state

    return (
      <div>
        <TextField id='my-text-field' type='text' helperId='username-helper-text' labelText='Label' labelHelper='Label helper' onChange={ this.handleInputChange }></TextField>
        <Button labelText='Click me!' onClick={ this.handleClickButton }></Button>
        <Button labelText='Message!' onClick={ this.handleShowSnackbar }></Button>
        <h1 id='mdc-typography' className='mdc-typography--headline6'>{ newValue }</h1>     
        <Snackbar />   
      </div>
    )
  }
}

const mapStateToProps = state => ({
  newValue: state.click.newValue
})

const mapDispatchToProps = dispatch => ({
  clickButton: newValue => dispatch(Creators.clickButton(newValue)),
  showSnackbar: (message, actionText, actionHandler) => dispatch(Creators.showSnackbar(message, actionText, actionHandler))
})

export default connect(mapStateToProps, mapDispatchToProps)(Click)