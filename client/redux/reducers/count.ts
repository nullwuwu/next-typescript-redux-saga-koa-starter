import { CountActionsTypes } from '../actions/count'
import {
	DECREMENT_NUMBER,
	INCREMENT_NUMBER,
	ASYNC_INCREMENT_NUMBER,
} from '../actionTypes/count'
import { CountState } from '../models/count'

const initialState: CountState = {
	number: 0,
}

function reducer(state = initialState, action: CountActionsTypes) {
	switch (action.type) {
		case INCREMENT_NUMBER:
			return {
				...state,
				number: state.number + 1,
			}
		case DECREMENT_NUMBER:
			return {
				...state,
				number: state.number - 1,
			}
		case ASYNC_INCREMENT_NUMBER:
			return state
		default:
			return state
	}
}

export default reducer
