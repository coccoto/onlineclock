import Path from './path'

const point = () => {

    if (location.pathname === Path.alarm) {
        return true

    } else if (location.pathname === Path.timer) {
        return false
    }
}

export default {
    cFrame: {
        form: point() ? 'c-frame-form-3' : 'c-frame-form-5',
    },
    sWidth: {
        percent: point() ? 's-width-percent-50' : 'e-width-percent-70',
    },
}