// hooks
import useBranch from './../hooks/useBranch'

export default {
    components: {
        frame: {
            form: useBranch() ? 'c-frame-form-alarm' : 'c-frame-form-timer',
            formButton: useBranch() ? 'c-frame-form-alarm-button' : 'c-frame-form-timer-button',
        }
    },
    states: {
        width: {
            percent: useBranch() ? 's-width-percent-70-30' : 's-width-percent-90-50'
        }
    },
}