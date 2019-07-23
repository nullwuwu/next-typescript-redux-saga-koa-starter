import { put, takeLatest, delay } from '@redux-saga/core/effects'
import { ASYNC_INCREMENT_NUMBER } from '../actionTypes/count'
import { countIncrease } from '../actions/count'

function* asyncIncrement() {
	yield delay(500)
	console.log('delay 500')
	yield put(countIncrease())
}

export function* watch() {
	yield takeLatest(ASYNC_INCREMENT_NUMBER, asyncIncrement)
}
