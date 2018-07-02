import Immutable from 'seamless-immutable'

import { createReducer } from 'reduxsauce'

import { Types } from '@redux/actions'

export const INITIAL_STATE = Immutable({
  newValue: 'Atualizado via Redux!'
})

export const clickButton = (state = INITIAL_STATE, action) => {
  return { ...state, newValue: action.payload }
}

const HANDLERS = {
  [Types.CLICK_BUTTON]: clickButton
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)

export default reducer