// test
import taregtDate from '@/scripts/utils/taregtDate'

const currentDate = new Date()

test('taregtDate', () => {
    const result = taregtDate().alarm({
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