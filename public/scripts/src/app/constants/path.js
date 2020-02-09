/**
 * @param {string} path
 * @return {string}
 */
export default (path) => {

    switch (path) {
        case 'clock':
            return '/'
        case 'alarm':
            return '/alarm'
        case 'timer':
            return '/timer'
    }
}