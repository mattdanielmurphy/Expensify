import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
	<div>
		<h1>Expense List</h1>
		<div className='expense-list'>
			<div className='table-header Rtable Rtable--4cols'>
				<div className='Rtable-cell'>Description</div>
				<div className='Rtable-cell'>Amount</div>
				<div className='Rtable-cell'>Date Created</div>
				<div className='Rtable-cell' />
			</div>
			{props.expenses.map((x) => <ExpenseListItem key={x.id} {...x} />)}
		</div>
	</div>
)

const mapStateToProps = (state) => ({
	expenses: selectExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseList)
