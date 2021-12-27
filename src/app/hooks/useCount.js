import {
    addSeconds,
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

    const calculate = (time, Path) => {
        const month = advanceDate.getMonth()
        const year = advanceDate.getYear(month)

        let targetDate = new Date(
            year,
            month,
            time.date,
            time.hour,
            time.minute,
            time.second,
        )

        if (Path.timer) {
            targetDate = addSeconds(targetDate, 1)
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