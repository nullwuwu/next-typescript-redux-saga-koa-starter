import { Counter } from '$components/index'
import React from 'react'
import { NextFC } from 'next'
import { RootState, RootAction } from 'typesafe-actions'
import { Store } from 'redux'
import { fetchCounter } from '$stories/counter/actions'
import getStore from '$redux/selectors'

const CounterPage: NextFC<{}, {}, Store<RootState, RootAction>> = () => {
	return (
		<>
			<Counter />
		</>
	)
}

CounterPage.getInitialProps = async (store) => {
	const action = getStore(store)
	action.dispatch(fetchCounter())

	return {}
}

export default CounterPage
