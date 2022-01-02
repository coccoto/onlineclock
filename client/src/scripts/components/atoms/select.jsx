// react
import React from 'react'
// hooks
import useSelectElement from '@/scripts/hooks/useSelectElement'
// styles
import styles from '@/styles/components/atoms/select.module.sass'

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

    const selectElement = useSelectElement()

    const handleChange = (event) => {
        const target = event.target

        setTime({
            ...time,
            [target.name]: Number(target.value),
        })
    }

    return (
        <div className={styles['container']}>
            <div>
                <select
                    className={styles['select']}
                    name={'hour'}
                    onChange={handleChange}>
                {selectElement.create(23)}</select>
            </div>
            <div className={styles['select-colon']}>：</div>
            <div>
                <select
                    className={styles['select']}
                    name={'minute'}
                    onChange={handleChange}>
                {selectElement.create(59)}</select>
            </div>
            <div className={styles['select-colon']}>：</div>
            <div>
                <select
                    className={styles['select']}
                    name={'second'}
                    onChange={handleChange}>
                {selectElement.create(59)}</select>
            </div>
        </div>
    )
})