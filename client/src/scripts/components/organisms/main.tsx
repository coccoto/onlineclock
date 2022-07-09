// react
import React from 'react'
// organisms
import Alarm from '@/scripts/components/organisms/alarm'
import Clock from '@/scripts/components/organisms/clock'
// contexts
import Context from '@/scripts/contexts/context'
// styles
import styles from '@/styles/components/organisms/main.module.sass'

export default () => {

    return (
        <div className={styles['container']}>
            <Clock></Clock>
            <Context.Provider>
                <Alarm></Alarm>
            </Context.Provider>
        </div>
    )
}