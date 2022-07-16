// helper
import {
    subHours,
    subMinutes,
    differenceInHours,
    differenceInMinutes,
    differenceInSeconds,
} from 'date-fns'

const getRemaining = (stateDateTime: StateDateTime): StateTime => {
    const currentDate: Date = new Date()

    let targetDate: Date = new Date(
        stateDateTime.year,
        stateDateTime.month,
        stateDateTime.date,
        stateDateTime.hours,
        stateDateTime.minutes,
        stateDateTime.seconds
    )

    const hoursRemaining = differenceInHours(targetDate, currentDate)
    targetDate = subHours(targetDate, hoursRemaining)
    const minutessRemaining = differenceInMinutes(targetDate, currentDate)
    targetDate = subMinutes(targetDate, minutessRemaining)
    const secondsRemaining = differenceInSeconds(targetDate, currentDate)

    return {
        hours: hoursRemaining,
        minutes: minutessRemaining,
        seconds: secondsRemaining,
    }
}

export default {
    getRemaining: getRemaining
}