// constants
import Path from './../constants/path'

export default () => {

    if (location.pathname === Path.alarm) {
        return true

    } else if (location.pathname === Path.timer) {
        return false
    }
}