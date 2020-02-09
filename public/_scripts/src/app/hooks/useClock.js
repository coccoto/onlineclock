/**
 * @return {array}
 */
export default () => {

    let date = new Date()

    return({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
    })
}