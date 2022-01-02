// react
import React from 'react'
// styles
import styles from '@/styles/components/atoms/count.module.sass'

export default (props) => {

    const TimeElement = (props) => {
        return (
            <div className={styles['time']}>
                {props.time}
            </div>
        )
    }

    return (
        <div className={styles['container']}>
            <TimeElement time={String(props.time.hour).padStart(2, 0)}></TimeElement>
            <div className={styles['time-colon']}>：</div>
            <TimeElement time={String(props.time.minute).padStart(2, 0)}></TimeElement>
            <div className={styles['time-colon']}>：</div>
            <TimeElement time={String(props.time.second).padStart(2, 0)}></TimeElement>
        </div>
    )
}