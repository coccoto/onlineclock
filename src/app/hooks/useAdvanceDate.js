import React from 'react'
import {addDays, addMonths} from 'date-fns'

export default () => {

    const [bool] = React.useState({
        advanceMonth: false
    })

    const date = new Date()

    const isAdvance = (time) => {

        if (time.hour < date.getHours() || (time.hour == date.getHours() && time.minute <= date.getMinutes())) {
            return true
        }
        return false
    }

    const getMonth = () => {

        if (bool.advanceMonth) {
            const tomrrow = addMonths(date, 1)
            return tomrrow.getMonth()
        }
        return date.getMonth()
    }

    const getDate = (time) => {

        if (isAdvance(time)) {
            const tomorrow = addDays(date, 1)
            const tomorrowDate = tomorrow.getDate()

            if (tomorrowDate === 1) {
                bool.advanceMonth = true
            }
            return tomorrowDate
        }
        return date.getDate()
    }

    return {
        getDate: getDate,
        getMonth: getMonth,
    }
}