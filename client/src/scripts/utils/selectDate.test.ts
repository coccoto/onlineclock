// test
import selectDate from '@/scripts/utils/selectDate'

const currentDate = new Date()

test('001', () => {
    const result = selectDate().alarm({
        year: 0,
        month: 0,
        date: 0,
        hours: 0,
        minutes:0,
        seconds: 0,
    })
    console.log(result)

    expect(result).toEqual({
        year: currentDate.getFullYear(),
        month: currentDate.getMonth(),
        date: currentDate.getDate(),
        hours: 0,
        minutes:0,
        seconds: 0,
    })
})