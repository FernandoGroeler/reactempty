import React, { Component } from 'react'

import { MDCTextField } from '@material/textfield'

class TextField extends Component {
  componentDidMount() {    
    new MDCTextField(document.querySelector('.mdc-text-field'))
  }

  render () {
    return (
      <div>
        <div className="mdc-text-field">
          <input 
            type={ this.props.type }
            id={ this.props.id } 
            className='mdc-text-field__input' 
            aria-controls={ this.props.helperId }
            aria-describedby={ this.props.helperId }
            onChange={ this.props.onChange } />
          <label className='mdc-floating-label' htmlFor={ this.props.id }>{ this.props.labelText }</label>
          <div className='mdc-line-ripple'></div>
        </div>  
        <p id={ this.props.helperId } className='mdc-text-field-helper-text' aria-hidden='true'>
          { this.props.labelHelper }
        </p>                  
      </div>
    )
  }
}

export default TextField