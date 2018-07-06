import Immutable from 'seamless-immutable'

import { createReducer } from 'reduxsauce'

import { Types } from '@redux/actions'

export const INITIAL_STATE = Immutable({
  headerTitle: '',
  body: ''
})

export const showDialog = (state = INITIAL_STATE, action) => {
  return { ...state, headerTitle: action.headerTitle, body: action.body }
}

const HANDLERS = {
  [Types.SHOW_DIALOG]: showDialog
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)

export default reducer