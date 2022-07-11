// library
import { addDays } from 'date-fns'

type Return = {
    alarm: (selectTime: SelectTime) => SelectTime
}

export default (): Return => {

    const currentDate: Date = new Date()

    const alarm = (selectTime: SelectTime): SelectTime => {
        if (currentDate.getHours() >= selectTime.hours && currentDate.getMinutes() >= selectTime.minutes && currentDate.getSeconds() > selectTime.seconds) {
            const nextDate: Date = addDays(currentDate, 1)
            return {
                year: nextDate.getFullYear(),
                month: nextDate.getMonth(),
                date: nextDate.getDate(),
                hours: 0,
                minutes: 0,
                seconds: 0,
            }
        } else {
            return {
                year: currentDate.getFullYear(),
                month: currentDate.getMonth(),
                date: currentDate.getDate(),
                hours: 0,
                minutes: 0,
                seconds: 0,
            }
        }
    }

    return {
        alarm: alarm
    }
}