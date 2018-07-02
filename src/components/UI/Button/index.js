import React, { Component } from 'react'

import { MDCRipple } from '@material/ripple'

class Button extends Component {
  componentDidMount() {    
    new MDCRipple(document.querySelector('.foo-button'))
  }
  
  render() {
    return (
      <button className='foo-button mdc-button' onClick={ this.props.onClick }>
        { this.props.labelText }
      </button>      
    )
  }
}

export default Button