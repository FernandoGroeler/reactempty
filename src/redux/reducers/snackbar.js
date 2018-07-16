import Immutable from 'seamless-immutable'

import { createReducer } from 'reduxsauce'

import { Types } from '@redux/actions'

import { MDCSnackbar } from '@material/snackbar'

const INITIAL_STATE = Immutable({
  message: '',
  actionText: '',
  actionHandler: () => {},
  isError: false
})

export const showSnackbar = (state = INITIAL_STATE, action) => {
  const { message, actionText, isError } = action

  var actionHandler = action.actionHandler

  if (actionHandler === undefined) {
    actionHandler = state.actionHandler
  }

  const dataObj = {
    message: message,
    actionText: actionText,
    actionHandler: actionHandler
  }

  const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'))
  snackbar.show(dataObj)

  return { ...state, message: message, actionText: actionText, actionHandler: actionHandler, isError: isError }
}

const HANDLERS = {
  [Types.SHOW_SNACKBAR]: showSnackbar
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)

export default reducer