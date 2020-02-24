import React from 'react'
// styles
import styles from '@/app/styles/components/atoms/count.module.sass'

export default (props) => {

    React.useEffect(() => {
        document.title = String(props.time.hour).padStart(2, 0) + ' : ' + String(props.time.minute).padStart(2, 0) + ' : ' + String(props.time.second).padStart(2, 0)
    })

    const Element = (props) => {
        return (
            <div className={styles['time']}>
                {props.time}
            </div>
        )
    }

    return (
        <div className={styles['container']}>
            <Element time={String(props.time.hour).padStart(2, 0)}></Element>
            <div className={styles['time-colon']}>：</div>
            <Element time={String(props.time.minute).padStart(2, 0)}></Element>
            <div className={styles['time-colon']}>：</div>
            <Element time={String(props.time.second).padStart(2, 0)}></Element>
        </div>
    )
}