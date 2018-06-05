// Get visible expenses (as determined by filters)

export default (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses
		.filter((exp) => {
			const startDateMatch =
				typeof startDate !== 'number' || exp.createdAt >= startDate
			const endDateMatch =
				typeof endDate !== 'number' || exp.createdAt <= endDate
			const textMatch = exp.description
				.toLowerCase()
				.includes(text.toLowerCase())

			return startDateMatch && endDateMatch && textMatch
		})
		.sort((a, b) => {
			if (sortBy === 'date') {
				return b.createdAt - a.createdAt
			} else if (sortBy === 'amount') {
				return b.amount - a.amount
			}
		})
}
