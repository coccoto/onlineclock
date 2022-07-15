// test
import dateChanger from '@/scripts/utils/dateChanger'

const currentDate: Date = new Date()

test('dateChanger', () => {
    const result = dateChanger.alarm({
        hours: 0,
        minutes: 0,
        seconds: 0,
    })
    console.log(result)

    expect(result).toEqual({
        year: currentDate.getFullYear(),
        month: currentDate.getMonth(),
        date: currentDate.getDate(),
    })
})