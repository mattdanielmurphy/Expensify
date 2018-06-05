import React from 'react'
import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))
// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())
// store.dispatch(sortByAmount())

store.dispatch(setStartDate(125))
store.dispatch(setEndDate(1250))

store.dispatch(sortByAmount())

const demoState = {
	expenses: [
		{
			id: 'asdags',
			description: 'January rent',
			note: 'this was final payment for that address',
			amount: 51250,
			createdAt: 0
		}
	],
	filters: [
		{
			text: 'rent',
			sortBy: 'amount', // createdAt or amount
			startDate: undefined,
			endDate: undefined
		}
	]
}
