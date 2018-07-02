import '@styles'

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { Store, Persistor } from '@redux/store'
import { PersistGate } from 'redux-persist/integration/react'

import Routes from '@components/Routes'

const rootElement = document.getElementById('root') 

ReactDOM.render(
  <Provider store={ Store }> 
    <PersistGate loading={ null } persistor={ Persistor }>  
      <Routes />    
    </PersistGate>
  </Provider>
, rootElement)