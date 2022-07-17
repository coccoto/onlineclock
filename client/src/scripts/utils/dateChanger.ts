// helpers
import {
    addDays,
    addHours,
    addMinutes,
    addSeconds,
} from 'date-fns'

const alarmMethod = (selectedTime: StateTime): StateDateTime => {

    const currentDate: Date = new Date()

    const getDateInfo = () => {
        if (isNextDate(selectedTime)) {
            const nextDate: Date = addDays(currentDate, 1)
            return {
                year: nextDate.getFullYear(),
                month: nextDate.getMonth(),
                date: nextDate.getDate(),
                hours: selectedTime.hours,
                minutes: selectedTime.minutes,
                seconds: selectedTime.seconds,
            }
        } else {
            return {
                year: currentDate.getFullYear(),
                month: currentDate.getMonth(),
                date: currentDate.getDate(),
                hours: selectedTime.hours,
                minutes: selectedTime.minutes,
                seconds: selectedTime.seconds,
            }
        }
    }

    const isNextDate = (selectedTime: StateTime): boolean => {
        if (currentDate.getHours() >= selectedTime.hours) {
            if (currentDate.getHours() > selectedTime.hours) {
                return true
            }
            if (currentDate.getMinutes() >= selectedTime.minutes) {
                if (currentDate.getMinutes() > selectedTime.minutes) {
                    return true
                }
                if (currentDate.getSeconds() > selectedTime.seconds) {
                    return true
                }
            }
        }
        return false
    }
    return getDateInfo()
}

const timerMethod = (selectedTime: StateTime): StateDateTime => {

    const currentDate: Date = new Date()

    let targetDate: Date = addHours(currentDate, selectedTime.hours)
    targetDate = addMinutes(targetDate, selectedTime.minutes)
    targetDate = addSeconds(targetDate, selectedTime.seconds + 1)

    return {
        year: targetDate.getFullYear(),
        month: targetDate.getMonth(),
        date: targetDate.getDate(),
        hours: targetDate.getHours(),
        minutes: targetDate.getMinutes(),
        seconds: targetDate.getSeconds(),
    }
}

export default {
    alarmMethod: alarmMethod,
    timerMethod: timerMethod,
}