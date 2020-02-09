/**
 * @param {array} time
 * @return {array}
 */
export default (time) => {

    let date = new Date()

    let input = new Date(
        date.getFullYear(),
        date.getMonth(),
        getDate(date, time),
        time.hour,
        time.minute,
    )

    let diff = input - date
    return extract(diff)
}

/**
 * @param {number} diff
 * @return {array}
 */
const extract = (diff) => {

    let hour = Math.floor(diff / (1000 * 60 * 60))
    diff -= hour * (1000 * 60 * 60)
    let minute = Math.floor(diff / (1000 * 60))
    diff -= minute * (1000 * 60)
    let second = Math.floor(diff / 1000)

    return({
        hour: hour,
        minute: minute,
        second: second,
    })
}

/**
 * @param {object} date
 * @param {array} time
 * @return {number}
 */
const getDate = (date, time) => {

    if (time.hour < date.getHours() || time.hour == date.getHours() && time.minute <= date.getMinutes()) {
        return date.getDate() + 1

    } else {
        return date.getDate()
    }
}