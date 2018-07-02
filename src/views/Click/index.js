import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Creators } from '@redux/actions'

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

  render() {
    const { newValue } = this.state

    return (
      <div>
        <TextField id='my-text-field' type='text' helperId='username-helper-text' labelText='Label' labelHelper='Label helper' onChange={ this.handleInputChange }></TextField>
        <Button labelText='Click me!' onClick={ this.handleClickButton }></Button>
        <h1 id='mdc-typography' className='mdc-typography--headline6'>{ newValue }</h1>        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  newValue: state.click.newValue
})

const mapDispatchToProps = dispatch => ({
  clickButton: newValue => dispatch(Creators.clickButton(newValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(Click)


