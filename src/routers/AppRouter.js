import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	NavLink
} from 'react-router-dom'

import Header from '../components/Header'
import DashboardPage from '../components/DashboardPage'
import CreateExpensePage from '../components/CreateExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
	<Router>
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={DashboardPage} />
				<Route path='/create' component={CreateExpensePage} />
				<Route path='/help' component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
)

export default AppRouter
