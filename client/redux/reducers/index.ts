import { combineReducers } from 'redux'
import countReducer from './count'
import { AppState } from '../models'

export const rootReducer = combineReducers<AppState>({
	countState: countReducer,
})

export default rootReducer
