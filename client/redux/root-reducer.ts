import { combineReducers } from 'redux'
import counterReducers from '$stories/counter/reducer'

const rootReducer = combineReducers({
	counter: counterReducers,
})

export default rootReducer
