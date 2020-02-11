// constants
import Path from '../constants/path'

/**
 * @param {string} pathname
 */
export default (pathname) => {

    switch (pathname) {
        case 'clock':
            if (location.pathname === Path.clock) {
                return true
            }
            break
        case 'alarm':
            if (location.pathname === Path.alarm) {
                return true
            }
            break
        case 'timer':
            if (location.pathname === Path.timer) {
                return true
            }
            break
    }
}