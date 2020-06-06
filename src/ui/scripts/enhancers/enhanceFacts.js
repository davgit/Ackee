const defaults = {
	views_active: 0,
	views_average: 0,
	durations_average: 0,
	views_today: 0,
	views_month: 0,
	views_year: 0
}

export default (items) => {

	const overwrites = items.reduce((acc, item) => {
		acc[item.data.id] = item.data.count || item.data.average
		return acc
	}, {})

	return {
		...defaults,
		...overwrites
	}

}