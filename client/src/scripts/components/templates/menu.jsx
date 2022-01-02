// react
import React from 'react'
// styles
import styles from '@/styles/components/templates/menu.module.sass'

export default (props) => {

    return (
        <ul className={styles['container']}>
            <li><a
                className={props.pathManager.isLocation.alarm ? styles['list-selected'] : styles['list']}
                href={props.pathManager.path.alarm}
            >Alarm</a></li>
            <li><a
                className={props.pathManager.isLocation.clock ? styles['list-center-selected'] : styles['list-center']}
                href={props.pathManager.path.clock}
            >Clock</a></li>
            <li><a
                className={props.pathManager.isLocation.timer ? styles['list-selected'] : styles['list']}
                href={props.pathManager.path.timer}
            >Timer</a></li>
        </ul>
    )
}