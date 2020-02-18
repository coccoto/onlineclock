import React from 'react'
// resources
import Path from 'scripts/resources/path'
// styles
import styles from 'styles/components/molecules/menu.module.sass'

export default () => {

    return (
        <ul className={styles['container']}>
            <li><a
                className={styles['list']}
                href={Path.alarm}
            >Alarm</a></li>
            <li><a
                className={styles['list-center']}
                href={Path.clock}
            >Clock</a></li>
            <li><a
                className={styles['list']}
                href={Path.timer}
            >Timer</a></li>
        </ul>
    )
}