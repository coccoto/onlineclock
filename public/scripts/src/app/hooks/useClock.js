/**
 * @return {array}
 */
export default () => {

    const date = new Date()

    return ({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
    })
}