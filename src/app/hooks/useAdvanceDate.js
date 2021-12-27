import React from 'react'
import {addYears, addMonths, addDays} from 'date-fns'

export default () => {

    const [bool, setBool] = React.useState({
        advanceMonth: false,
    })

    const date = new Date()

    const isAdvance = (time) => {

        if (time.hour < date.getHours() || (time.hour == date.getHours() && time.minute <= date.getMinutes() && time.second < date.getSeconds())) {
            return true
        }
        return false
    }

    const getYear = (month) => {

        if (month === 0) {
            const tomrrow = addYears(date, 1)
            return tomrrow.getFullYear()
        }
        return date.getFullYear()
    }

    const getMonth = () => {

        if (bool.advanceMonth) {
            setBool({advanceMonth: false})

            const tomrrow = addMonths(date, 1)
            const tomorrowDate = tomrrow.getMonth()
            return tomorrowDate
        }
        return date.getMonth()
    }

    const getDate = (time) => {

        if (isAdvance(time)) {
            const tomorrow = addDays(date, 1)
            const tomorrowDate = tomorrow.getDate()

            if (tomorrowDate === 1) {
                setBool({advanceMonth: true})
            } else {
                setBool({advanceMonth: false})
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