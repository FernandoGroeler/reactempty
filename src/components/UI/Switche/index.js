import React, { Component } from 'react'

class Switche extends Component {
  render() {
    return (
			<div>
    		<div className='mdc-switch'>
    			<input type='checkbox' id='another-basic-switch' className='mdc-switch__native-control' role='switch'/>
        	<div className='mdc-switch__background'>
          	<div className='mdc-switch__knob'></div>
					</div>
      	</div>
				<label className='mdc-typography--caption' htmlFor='another-basic-switch'> off/on</label>
			</div>
    )
  }
}

export default Switche