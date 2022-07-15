// library
import { addDays } from 'date-fns'

type Return = {
    alarm: (selectTime: SelectTime) => StateDate
}

export default (): Return => {

    const currentDate: Date = new Date()

    const alarm = (selectTime: SelectTime): StateDate => {

        if (isNext(selectTime)) {
            const nextDate: Date = addDays(currentDate, 1)
            return {
                year: nextDate.getFullYear(),
                month: nextDate.getMonth(),
                date: nextDate.getDate(),
            }
        } else {
            return {
                year: currentDate.getFullYear(),
                month: currentDate.getMonth(),
                date: currentDate.getDate(),
            }
        }
    }

    const isNext = (selectTime: SelectTime): boolean => {

        if (currentDate.getHours() >= selectTime.hours) {

            if (currentDate.getHours() > selectTime.hours) {
                return true
            }
            if (currentDate.getMinutes() >= selectTime.minutes) {

                if (currentDate.getMinutes() > selectTime.minutes) {
                    return true
                }
                if (currentDate.getSeconds() > selectTime.seconds) {
                    return true
                }
            }
        }
        return false
    }

    return {
        alarm: alarm
    }
}