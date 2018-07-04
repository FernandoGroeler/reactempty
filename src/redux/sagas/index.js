import { takeLatest } from 'redux-saga/effects'

import { Types } from '@redux/actions'

import { clickSagas } from './click'

const sagas = function* sagas() {
  yield takeLatest(Types.CLICK_BUTTON, clickSagas)
}

export default sagas