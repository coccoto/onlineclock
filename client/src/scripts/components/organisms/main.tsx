// react
import React from 'react'
// organisms
import Alarm from '@/scripts/components/organisms/alarm'
// contexts
import Context from '@/scripts/contexts/context'
// styles
import styles from '@/styles/components/organisms/main.module.sass'

export default () => {

    return (
        <div className={styles['container']}>
            <Context.Provider>
                <Alarm></Alarm>
            </Context.Provider>
        </div>
    )
}