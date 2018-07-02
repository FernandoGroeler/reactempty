import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHashHistory from 'history/createHashHistory'

import App from '@components/App'
import Click from '@views/Click'

class Routes extends Component {
  render() {
    const history = createHashHistory()

    return (
      <Router history={ history }>
        <div className='docs-root' >
          <Switch>
            <Route exact path='/' component={ Click } />
            <Route path='/' component={ App } />
            <Route path='/click' component={ Click } />
          </Switch>  
        </div>
      </Router>
    )
  }
}

export default Routes

//<Redirect from='*' to='/' />
//        <React.StrictMode>