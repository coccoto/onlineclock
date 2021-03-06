// resources
import Path from '@/app/resources/path'

/**
 * @return {boolean}
 */
export default () => {

    return {
        clock: location.pathname === Path.clock,
        alarm: location.pathname === Path.alarm,
        timer: location.pathname === Path.timer,
    }
}