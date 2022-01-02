// helper
import {
    addSeconds,
    subDays, subHours, subMinutes,
    differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds
} from 'date-fns'

export default (date) => {

    const calculate = (time, pathManager, advanceDate) => {
        let targetDate = new Date(
            advanceDate.getYear(),
            advanceDate.getMonth(),
            time.date,
            time.hour,
            time.minute,
            time.second,
        )
        if (pathManager.isLocation.timer) {
            targetDate = addSeconds(targetDate, 1) // add 1 second
        }
        const diffTime = diffCalculate(date, targetDate)
        return diffTime
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

    return {
        calculate: calculate,
    }
}