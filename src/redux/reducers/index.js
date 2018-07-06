import { combineReducers } from 'redux'

import click from './click'
import snackbar from './snackbar'

export const reducers = {
  click,
  snackbar
}

export default combineReducers(reducers)