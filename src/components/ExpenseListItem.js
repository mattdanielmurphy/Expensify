import React from 'react'
import { connect } from 'react-redux'

import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({ id, amount, description, createdAt, dispatch }) => (
	<div className='expense Rtable Rtable--4cols' key={id}>
		<div className='Rtable-cell'>{description}</div>
		<div className='Rtable-cell'>{amount}</div>
		<div className='Rtable-cell'>{createdAt}</div>
		<div className='Rtable-cell'>
			<button onClick={() => dispatch(removeExpense({ id }))}>
				Remove
			</button>
		</div>
	</div>
)

export default connect()(ExpenseListItem)
