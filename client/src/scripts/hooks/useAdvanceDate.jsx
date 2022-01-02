// react
import React from 'react'
// helper
import {addYears, addMonths, addDays} from 'date-fns'

export default (date) => {

    const [isAdvanceDate, setIsAdvanceDate] = React.useState(false)

    const isIncrementDate = (time) => {

        if (time.hour < date.getHours() || (time.hour == date.getHours() && time.minute <= date.getMinutes() && time.second < date.getSeconds())) {
            return true
        }
        return false
    }

    const getYear = () => {

        if (isAdvanceDate && getMonth() === 0) {
            return addYears(date, 1).getFullYear()
        }
        return date.getFullYear()
    }

    const getMonth = () => {

        if (isAdvanceDate) {
            return addMonths(date, 1).getMonth()
        }
        return date.getMonth()
    }

    const getDate = (time) => {

        if (isIncrementDate(time)) {
            const tomorrowDate = addDays(date, 1).getDate() // tomorrow

            if (tomorrowDate === 1) {
                setIsAdvanceDate(true)
            } else {
                setIsAdvanceDate(false)
            }
            return tomorrowDate
        }
        return date.getDate()
    }

    return {
        getYear: getYear,
        getMonth: getMonth,
        getDate: getDate,
    }
}