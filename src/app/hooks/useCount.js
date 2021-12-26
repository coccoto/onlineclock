import {
    subDays,
    subHours,
    subMinutes,
    differenceInDays,
    differenceInHours,
    differenceInMinutes,
    differenceInSeconds
} from 'date-fns'

/**
 * @param {object} date
 * @param {object} advanceDate
 * @return {array}
 */
export default (date, advanceDate) => {

    const calculate = (time) => {
        const targetDate = new Date(
            date.getFullYear(),
            advanceDate.getMonth(time),
            time.date,
            time.hour,
            time.minute,
        )
        console.log(targetDate)
        const diffTime = diffCalculate(date, targetDate)
        return diffTime
    }

    return {
        calculate: calculate,
    }
}

/**
 * @param {object} date
 * @param {object} targetDate
 * @return {array}
 */
const diffCalculate = (date, targetDate) => {

    const day = differenceInDays(targetDate, date)
    targetDate = subDays(targetDate, day)

    const hour = differenceInHours(targetDate, date)
    targetDate = subHours(targetDate, hour)

    const minute = differenceInMinutes(targetDate, date)
    targetDate = subMinutes(targetDate, minute)

    const second = differenceInSeconds(targetDate, date)

    return {
        date: day,
        hour: hour,
        minute: minute,
        second: second,
    }
}