import Immutable from 'seamless-immutable'

import { createReducer } from 'reduxsauce'

import { Types } from '@redux/actions'

import {MDCDialog } from '@material/dialog'

export const INITIAL_STATE = Immutable({
  headerTitle: '',
  body: ''
})

export const showDialog = (state = INITIAL_STATE, action) => {
  const dialog = new MDCDialog(document.querySelector('#my-mdc-dialog'))

  dialog.listen('MDCDialog:accept', function() {
    console.log('accepted');
  })
  
  dialog.listen('MDCDialog:cancel', function() {
    console.log('canceled');
  })
  
  dialog.show();

  return { ...state, headerTitle: action.headerTitle, body: action.body }
}

const HANDLERS = {
  [Types.SHOW_DIALOG]: showDialog
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)

export default reducer