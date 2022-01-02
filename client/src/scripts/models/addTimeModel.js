// helper
import {addHours, addMinutes, addSeconds} from 'date-fns'

export default (date) => {

    const add = (time) => {
        let resultDate = {}

        resultDate = addHours(date, time.hour)
        resultDate = addMinutes(resultDate, time.minute)
        resultDate = addSeconds(resultDate, time.second)

        return {
            date: 0,
            hour: resultDate.getHours(),
            minute: resultDate.getMinutes(),
            second: resultDate.getSeconds(),
        }
    }

    return {
        add: add,
    }
}