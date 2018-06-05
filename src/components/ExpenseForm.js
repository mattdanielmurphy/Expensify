import React from 'react'
import { connect } from 'react-redux'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'

import { addExpense } from '../actions/expenses'

const now = moment()
console.log(now.format('MMM Do YYYY'))

const defaultState = {
	description: '',
	amount: '',
	note: '',
	redirect: false
}

class ExpenseForm extends React.Component {
	state = defaultState
	onDescriptionChange = (e) => {
		const description = e.target.value
		this.setState(() => ({ description }))
	}
	onAmountChange = (e) => {
		const amount = e.target.value
		if (amount.match(/^\d*(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }))
		}
	}
	onNoteChange = (e) => {
		const note = e.target.value
		this.setState(() => ({ note }))
	}
	onDateChange = (createdAt) => {
		this.setState({ createdAt })
	}
	onFocusChange = ({ focused }) => {
		this.setState({ calendarFocused })
	}
	handleAddExpense = (e) => {
		e.preventDefault()
		this.props.dispatch(addExpense(this.state))
		this.setState(defaultState)
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleAddExpense}>
					<input
						type='text'
						placeholder='Description'
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>
					<input
						type='text'
						placeholder='Amount'
						value={this.state.amount}
						onChange={this.onAmountChange}
					/>
					<textarea
						placeholder='Add a note for your expense. (optional)'
						cols='30'
						rows='5'
						value={this.state.note}
						onChange={this.onNoteChange}
					/>
					<button>Add Expense</button>
				</form>
			</div>
		)
	}
}

export default connect()(ExpenseForm)
