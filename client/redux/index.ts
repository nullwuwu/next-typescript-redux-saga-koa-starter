import { IS_DEV } from 'consts/index'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

const bindMiddleware = (middleware) => {
	if (IS_DEV) {
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		const { composeWithDevTools } = require('redux-devtools-extension')
		return composeWithDevTools(applyMiddleware(...middleware))
	}

	return applyMiddleware(...middleware)
}

const configureStore = (initialState = {}) => {
	const sagaMiddleware = createSagaMiddleware()

	const store = createStore(
		rootReducer,
		initialState,
		bindMiddleware([sagaMiddleware]),
	)

	store.sagaTask = sagaMiddleware.run(rootSaga)

	return store
}

export * from './reducers'

export default configureStore
