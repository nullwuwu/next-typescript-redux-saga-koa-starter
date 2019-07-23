import * as React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../redux/models'
import {
	countDecrease,
	countIncrease,
	DECREMENT,
	INCREMENT,
} from '../redux/actions/count'

// interface OwnProps {}

interface StateProps {
	count: number
}

interface ActionProps {
	countIncrease: () => INCREMENT
	countDecrease: () => DECREMENT
}

const Counter = (props: StateProps & ActionProps) => {
	const { count, countIncrease, countDecrease } = props
	return (
		<div>
			<p>Count: {count}</p>
			<div>
				<button onClick={() => countIncrease()}>Increment</button>
				<button onClick={() => countDecrease()}>Decrement</button>
			</div>
		</div>
	)
}

export default connect<StateProps, ActionProps, {}, AppState>(
	(state) => ({
		count: state.countState.number,
	}),
	{
		countDecrease,
		countIncrease,
	},
)(Counter)
