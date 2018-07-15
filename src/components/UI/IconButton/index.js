import React, { Component } from 'react'

import { MDCRipple } from '@material/ripple'
import { MDCIconButtonToggle } from '@material/icon-button'

class IconButton extends Component {
  componentDidMount() {
    const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'))
    iconButtonRipple.unbounded = true
    new MDCIconButtonToggle(document.getElementById(this.props.id))
  }

  render() {
    return (
      <button id={ this.props.id }
        className='mdc-icon-button material-icons'
        aria-label={ this.props.ariaLabel }
        aria-hidden='true'
        aria-pressed='false'
        data-toggle-on-content={ this.props.dataToggleOnContent }
        data-toggle-on-label={ this.props.dataToggleOnLabel }
        data-toggle-off-content={ this.props.dataToogleOffContent }
        data-toggle-off-label={ this.props.dataToggleOffLabel }>{ this.props.iconName }</button>      
    )
  }
}

export default IconButton