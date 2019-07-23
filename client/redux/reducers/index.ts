import { combineReducers } from 'redux';
import countReducer, { IState } from './count';

export interface AppState {
    countState: IState;
}

export const reducers = combineReducers({
    countState: countReducer,
});

export default reducers;
