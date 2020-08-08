/**
 * @param {array} time
 * @return {array}
 */
export default (time) => {

    if (time.second > 0) {
        time.second -= 1

    } else if (time.minute > 0) {
        time.second += 59
        time.minute -= 1

    } else if (time.hour > 0) {
        time.second += 59
        time.minute += 59
        time.hour -= 1
    }

    return {
        hour: time.hour,
        minute: time.minute,
        second: time.second,
    }
}