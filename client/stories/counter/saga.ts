import { getCounterAPI } from './api'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { fetchCounterRequest, fetchCounter } from './actions'
import { CounterResponse } from 'CounterModel'
import { getType } from 'typesafe-actions'

import 'isomorphic-unfetch'
import es6promise from 'es6-promise'

es6promise.polyfill()

export function* handleFetchCounter() {
	try {
		yield put(fetchCounterRequest.request())
		const res: CounterResponse = yield call(getCounterAPI)
		yield put(fetchCounterRequest.success(Number(res.count)))
	} catch (error) {
		yield put(fetchCounterRequest.failure(error))
	}
}

export default function*() {
	yield all([takeEvery(getType(fetchCounter), handleFetchCounter)])
}
