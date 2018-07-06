import Immutable from 'seamless-immutable'

import { createReducer } from 'reduxsauce'

import { Types } from '@redux/actions'

export const INITIAL_STATE = Immutable({
  message: '',
  actionText: '',
  actionHandler: () => {}
})

export const showSnackbar = (state = INITIAL_STATE, action) => {
  return { ...state, message: action.message, actionText: action.actionText, actionHandler: action.actionHandler }
}

const HANDLERS = {
  [Types.SHOW_SNACKBAR]: showSnackbar
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)

export default reducer