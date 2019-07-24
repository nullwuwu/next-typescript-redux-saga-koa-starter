import { fork } from 'redux-saga/effects'
import counter from '$stories/counter/saga'

export default function* rootSaga() {
	yield fork(counter)
}
