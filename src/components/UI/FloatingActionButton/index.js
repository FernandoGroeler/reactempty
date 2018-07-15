import React, { Component } from 'react'

import { MDCRipple } from '@material/ripple'

class FloatingActionButton extends Component {
  componentDidMount() {    
    new MDCRipple(document.querySelector('.mdc-fab'))
  }
  
  render() {
    return (
      <button class='mdc-fab app-fab--absolute' aria-label={ this.props.ariaLabel }>
        <span class='mdc-fab__icon material-icons'>{ this.props.iconName }</span>
      </button>      
    )
  }
}

export default FloatingActionButton