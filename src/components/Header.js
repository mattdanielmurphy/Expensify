import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
	<header>
		<nav>
			<NavLink exact to='/' activeClassName='active'>
				<div className='link-text'>Dashboard</div>
			</NavLink>
			<NavLink to='/create' activeClassName='active'>
				<div className='link-text'>Create Expense</div>
			</NavLink>
			<NavLink to='/help' activeClassName='active'>
				<div className='link-text'>Help</div>
			</NavLink>
		</nav>
	</header>
)
