import { createReducer } from 'typesafe-actions'

import {
	fetchCounterRequest,
	incrementCounter,
	decrementCounter,
} from './actions'
import { combineReducers } from 'redux'

export const isFetching = createReducer(false as boolean)
	.handleAction([fetchCounterRequest.request], () => true)
	.handleAction(
		[fetchCounterRequest.success, fetchCounterRequest.failure],
		() => false,
	)

export const count = createReducer(0 as number)
	.handleAction([fetchCounterRequest.success], (_, action) => action.payload)
	.handleAction([incrementCounter], (state) => state + 1)
	.handleAction([decrementCounter], (state) => state - 1)

const counterReducers = combineReducers({
	isFetching,
	count,
})

export default counterReducers

export type CounterState = ReturnType<typeof counterReducers>
