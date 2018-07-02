import React from 'react'

export default props => (
  <div className="docs-app">
    <div className='docs-content-wrapper' role='main'>
      {props.children}
    </div>
  </div>
)