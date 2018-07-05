import { combineReducers } from 'redux'

import click from './click'
import snackbars from './snackbars'

export const reducers = {
  click,
  snackbars
}

export default combineReducers(reducers)