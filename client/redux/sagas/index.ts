import { all } from 'redux-saga/effects'
import { watch } from './count'

export default function* rootSaga() {
	yield all([watch()])
}
