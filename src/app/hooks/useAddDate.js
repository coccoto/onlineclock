import {addHours, addMinutes, addSeconds} from 'date-fns'

/**
 * @param {object} date
 * @return {number}
 */
 export default (date) => {

    const add = (time) => {
        let resultDate = {}

        resultDate = addHours(date, time.hour)
        resultDate = addMinutes(resultDate, time.minute)
        resultDate = addSeconds(resultDate, time.second)

        return resultDate
    }

    return {
        add: add,
    }
}