import { CountState } from './count'

export interface AppState {
	sagaTask?: any
	countState: CountState
}
