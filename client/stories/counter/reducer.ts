import { createReducer } from 'typesafe-actions'

import {
	fetchCounterRequest,
	incrementCounter,
	decrementCounter,
} from './actions'
import { combineReducers } from 'redux'

export const isFetching = createReducer<boolean>(false)
	.handleAction([fetchCounterRequest.request], () => true)
	.handleAction(
		[fetchCounterRequest.success, fetchCounterRequest.failure],
		() => false,
	)

export const count = createReducer<number>(0)
	.handleAction([fetchCounterRequest.success], (_, action) => {
		console.log(action.payload)
		return action.payload
	})
	.handleAction([incrementCounter], (state) => state + 1)
	.handleAction([decrementCounter], (state) => state - 1)

const counterReducers = combineReducers<{ isFetching: boolean; count: number }>(
	{
		isFetching,
		count,
	},
)

export default counterReducers

export type CounterState = ReturnType<typeof counterReducers>
