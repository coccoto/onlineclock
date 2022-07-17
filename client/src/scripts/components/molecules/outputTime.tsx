// react
import React from 'react'
// atoms
import CountTime from '@/scripts/components/atoms/countTime'
import SeparateTime from '@/scripts/components/atoms/separateTime'
// styles
import styles from '@/styles/components/molecules/outputTime.module.sass'

type Props = {
    stateTime: StateTime,
}

export default (props: Props): JSX.Element => {

    return (
        <div className={styles['container']}>
            <CountTime number={props.stateTime.hours}></CountTime>
            <SeparateTime></SeparateTime>
            <CountTime number={props.stateTime.minutes}></CountTime>
            <SeparateTime></SeparateTime>
            <CountTime number={props.stateTime.seconds}></CountTime>
        </div>
    )
}