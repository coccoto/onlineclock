import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// hooks
import useRoute from '@/app/hooks/useRoute'
import useSelect from '@/app/hooks/useSelect'
// resources
import Path from '@/app/resources/path'
// styles
import styles from '@/app/styles/components/atoms/select.module.sass'

export default React.forwardRef((props, ref) => {

    React.useImperativeHandle(ref, () => ({
        handleSubmit: () => {
            props.handleSubmit(time)
        }
    }))

    const [time, setTime] = React.useState({
        hour: 0,
        minute: 0,
        second: 0,
    })

    const route = useRoute()
    const select = useSelect()

    const handleChange = (event) => {
        const target = event.target

        setTime({
            ...time,
            [target.name]: target.value,
        })
    }

    return (
        <Router>
            <div className={route.alarm ? styles['container-alarm'] : styles['container-timer']}>
                <div>
                    <select
                        className={styles['select']}
                        name={'hour'}
                        onChange={handleChange}>
                    {select.create(23)}</select>
                </div>
                <div className={styles['select-colon']}>：</div>
                <div>
                    <select
                        className={styles['select']}
                        name={'minute'}
                        onChange={handleChange}>
                    {select.create(59)}</select>
                </div>
                <Route exact path={Path.timer}>
                    <div className={styles['select-colon']}>：</div>
                    <div>
                        <select
                            className={styles['select']}
                            name={'second'}
                            onChange={handleChange}>
                        {select.create(59)}</select>
                    </div>
                </Route>
            </div>
        </Router>
    )
})