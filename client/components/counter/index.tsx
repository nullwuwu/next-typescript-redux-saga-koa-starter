import * as React from 'react'
import { RootState } from 'typesafe-actions'
import {
	fetchCounter,
	decrementCounter,
	incrementCounter,
} from '$stories/counter/actions'
import { connect } from 'react-redux'

const mapStateToProps = (state: RootState) => ({
	isFetching: state.counter.isFetching,
	count: state.counter.count,
})

const dispatchProps = {
	fetchCounter,
	incrementCounter,
	decrementCounter,
}

type StateProps = ReturnType<typeof mapStateToProps>

type dispatchProps = typeof dispatchProps

class Counter extends React.PureComponent<StateProps & dispatchProps> {
	render() {
		const { count, decrementCounter, incrementCounter } = this.props

		return (
			<>
				<span>count: {count}</span>
				<button onClick={incrementCounter}>++++++</button>
				<button onClick={decrementCounter}>------</button>
			</>
		)
	}
}

export default connect(
	mapStateToProps,
	dispatchProps,
)(Counter)
