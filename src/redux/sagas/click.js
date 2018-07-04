import { put } from 'redux-saga/effects'

import { Creators } from '@redux/actions'

export function* clickSagas() {
  try {
    yield put(Creators.clickButton('teste sagas'))
  } catch (e) {
    console.log(e.message)
  }
}