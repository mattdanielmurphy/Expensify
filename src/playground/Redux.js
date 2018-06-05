import React from 'react'
import { createStore } from 'redux'

const countReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { count: state.count + action.incrementBy }
		case 'DECREMENT':
			return { count: state.count - action.decrementBy }
		case 'SET':
			return { count: action.count }
		case 'RESET':
			return { count: 0 }
		default:
			return state
	}
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
	console.log(store.getState())
})

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}, action) => ({
	type: 'DECREMENT',
	decrementBy
})

const setCount = ({ count } = {}, action) => ({
	type: 'SET',
	count
})

const resetCount = () => ({
	type: 'RESET'
})

store.dispatch(incrementCount({ incrementBy: 5 }))

export default () => <h1>Count: {store.getState().count}</h1>
