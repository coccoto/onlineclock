import React from 'react'
// styles
import styles from 'styles/components/atoms/button.module.sass'

export default (props) => {

    return (
        <button
            className={styles['container']}
            type={'button'}
            onClick={() => {props.onClick()}}>
        {props.label}</button>
    )
}