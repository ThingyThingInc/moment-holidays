import moment from 'moment-business-days'

const fedHolidays = require('@18f/us-federal-holidays')
const options = { shiftSaturdayHolidays: true, shiftSundayHolidays: true }
const holidays = fedHolidays.inRange(undefined, undefined, options) // gets holidays for the next year

moment.updateLocale(moment.locale(), {
	holidays: holidays.map((holiday) => holiday.dateString),
	holidayFormat: 'YYYY-MM-DD',
})

export default moment
