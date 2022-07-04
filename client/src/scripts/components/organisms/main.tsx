// react
import React from 'react'
// contexts
import Context from '@/scripts/contexts/context'
// styles
import styles from '@/styles/components/organisms/main.module.sass'

export default () => {

    return (
        <div className={styles['container']}>
            <Context.Provider>
            </Context.Provider>
        </div>
    )
}