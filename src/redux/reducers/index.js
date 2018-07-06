import { combineReducers } from 'redux'

import click from './click'
import snackbar from './snackbar'
import dialog from './dialog'

export const reducers = {
  click,
  snackbar,
  dialog
}

export default combineReducers(reducers)