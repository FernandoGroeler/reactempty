import { applyMiddleware, createStore } from 'redux'
import { persistCombineReducers, persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

import { reducers } from '@redux/reducers'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [], //-> navegação será persistida
  blacklist: [] //-> navegação não será persistida
}

const reducer = persistCombineReducers(persistConfig, reducers)
const middlewares = [multi, thunk, promise]

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

const composeEnhancers = composeWithDevTools(
  applyMiddleware(...middlewares)
)

export const Store = createStore(reducer, composeEnhancers)
export const Persistor = persistStore(Store)