import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Creators } from '@redux/actions'

import TextField from '@components/UI/TextField'
import Button from '@components/UI/Button'
import Switche from '@components/UI/Switche'
import FloatingActionButton from '@components/UI/FloatingActionButton'
import IconButton from '@components/UI/IconButton'

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
    this.props.showSnackbar('Mensagem de teste', 'Fechar', () => {})
  }

  handleShowDialog = (headerTitle, body) => {
    this.props.showDialog(headerTitle, body)
  }

  render() {
    const { newValue } = this.state

    return (
      <div>
        <TextField id='my-text-field' type='text' helperId='username-helper-text' labelText='Label' labelHelper='Label helper' onChange={ this.handleInputChange }></TextField>
        <Button labelText='Click me!' onClick={ this.handleClickButton }></Button>
        <Button labelText='Snackbar!' onClick={ this.handleShowSnackbar }></Button>
        <Button labelText='Dialog!' onClick={ () => this.handleShowDialog('Titulo', newValue) }></Button>
        <h6 id='mdc-typography' className='mdc-typography--headline6'>{ newValue }</h6>     
        <Switche />
        <br></br>
        <FloatingActionButton ariaLabel='Code' iconName='code' />
        <br></br>
        <br></br>
        <IconButton id='add-to-favorite' ariaLabel='Add to favorites' dataToggleOnContent='favorite' 
          dataToggleOnLabel='Remove from favorites' dataToogleOffContent='favorite_border'
          dataToggleOffLabel='Add to favorites' iconName='favorite_border'/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  newValue: state.click.newValue
})

const mapDispatchToProps = dispatch => ({
  clickButton: newValue => dispatch(Creators.clickButton(newValue)),
  showSnackbar: (message, actionText, actionHandler, isError) => dispatch(Creators.showSnackbar(message, actionText, actionHandler, isError)),
  showDialog: (headerTitle, body) => dispatch(Creators.showDialog(headerTitle, body))
})

export default connect(mapStateToProps, mapDispatchToProps)(Click)