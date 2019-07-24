import { createAction, createAsyncAction } from 'typesafe-actions'

export const BASE = 'counter/'

export const fetchCounter = createAction(`${BASE}FETCH_COUNTER`)

export const fetchCounterRequest = createAsyncAction(
	`${BASE}FETCH_COUNTER_REQUESTED`,
	`${BASE}FETCH_COUNTER_SUCCEEDED`,
	`${BASE}FETCH_COUNTER_FAILED`,
)<undefined, number, Error>()

export const incrementCounter = createAction(`${BASE}INCREMENT`)

export const decrementCounter = createAction(`${BASE}DECREMENT`)
