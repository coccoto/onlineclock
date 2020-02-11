import useRoute from '../hooks/useRoute'

export default {
    component: {
        frame: {
            form: useRoute('alarm') ? 'c-frame-form-3' : 'c-frame-form-5',
        },
    },
    element: {
        colorBack: {
            clock: useRoute('clock') ? 'e-color-back-theme-green' : '',
            alarm: useRoute('alarm') ? 'e-color-back-theme-green' : '',
            timer: useRoute('timer') ? 'e-color-back-theme-green' : '',
        }
    }
}