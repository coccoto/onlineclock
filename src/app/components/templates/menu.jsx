import React from 'react'
// hooks
import useRoute from '@/app/hooks/useRoute'
// resources
import Path from '@/app/resources/path'
// styles
import styles from '@/app/styles/components/templates/menu.module.sass'

export default () => {

    const route = useRoute()

    return (
        <ul className={styles['container']}>
            <li><a
                className={route.alarm ? styles['list-selected'] : styles['list']}
                href={Path.alarm}
            >Alarm</a></li>
            <li><a
                className={route.clock ? styles['list-center-selected'] : styles['list-center']}
                href={Path.clock}
            >Clock</a></li>
            <li><a
                className={route.timer ? styles['list-selected'] : styles['list']}
                href={Path.timer}
            >Timer</a></li>
        </ul>
    )
}