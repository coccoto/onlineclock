// react
import React from 'react'
// atoms
import MenuItem from '@/scripts/components/atoms/menuItem'
// styles
import styles from '@/styles/components/organisms/menu.module.sass'

export default () => {

    return (
        <div className={styles['container']}>
            <div className={styles['wrapper-item']}>
                <MenuItem
                    label={'Alarm'}
                    path={'/'}
                ></MenuItem>
            </div>
            <div className={styles['wrapper-item-selected']}>
                <MenuItem
                    label={'Timer'}
                    path={'/timer'}
                ></MenuItem>
            </div>
            <div className={styles['wrapper-item']}>
                <MenuItem
                    label={'Stopwatch'}
                    path={'/stopwatch'}
                ></MenuItem>
            </div>
        </div>
    )
}