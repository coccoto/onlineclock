import React from 'react'
// styles
import styles from '@/app/styles/components/atoms/button.module.sass'

export default (props) => {

    return (
        <button
            className={styles['button']}
            type={'button'}
            onClick={() => {props.onClick()}}>
        {props.label}</button>
    )
}