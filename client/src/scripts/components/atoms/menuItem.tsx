// react
import React from 'react'
// styles
import styles from '@/styles/components/atoms/menuItem.module.sass'

type Props = {
    label: string,
    path: string,
}

export default (props: Props): JSX.Element  => {
    
    const handleSubmit = () => {
        window.location.href = location.origin + props.path
    }

    return (
        <div
            className={styles['item']}
            onClick={() => {handleSubmit()}}
        >{props.label}</div>
    )
}