import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// hooks
import useRoute from '@/app/hooks/useRoute'
import useCreateSelect from '@/app/hooks/useCreateSelect'
// styles
import styles from '@/app/styles/components/atoms/select.module.sass'

export default React.forwardRef((props, ref) => {

    React.useImperativeHandle(ref, () => ({
        handleSubmit: () => {
            props.handleSubmit(time)
        }
    }))

    const [time, setTime] = React.useState({
        date: 0,
        hour: 0,
        minute: 0,
        second: 0,
    })

    const createSelect = useCreateSelect()

    const handleChange = (event) => {
        const target = event.target

        setTime({
            ...time,
            [target.name]: Number(target.value),
        })
    }

    return (
        <Router>
            <div className={styles['container']}>
                <div>
                    <select
                        className={styles['select']}
                        name={'hour'}
                        onChange={handleChange}>
                    {createSelect.create(23)}</select>
                </div>
                <div className={styles['select-colon']}>：</div>
                <div>
                    <select
                        className={styles['select']}
                        name={'minute'}
                        onChange={handleChange}>
                    {createSelect.create(59)}</select>
                </div>
                <div className={styles['select-colon']}>：</div>
                <div>
                    <select
                        className={styles['select']}
                        name={'second'}
                        onChange={handleChange}>
                    {createSelect.create(59)}</select>
                </div>
            </div>
        </Router>
    )
})