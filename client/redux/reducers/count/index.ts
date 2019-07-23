import { ALL } from '../../actions'
import { DECREMENT_NUMBER, INCREMENT_NUMBER } from '../../actionTypes'

const initialState = {
	number: 0,
}

export type IState = Readonly<typeof initialState>

function reducer(state: IState = initialState, action: ALL) {
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
		default:
			return state
	}
}

export default reducer
