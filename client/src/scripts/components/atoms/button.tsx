// react
import React from 'react'
// styles
import styles from '@/styles/components/atoms/button.module.sass'

type Props = {
    isRun: boolean,
    activateLabel: string,
    deactivateLabel: string,
    onSubmit: () => void,
}

export default (props: Props): JSX.Element  => {

    const getLabel = (): string => {
        return props.isRun ? props.activateLabel : props.deactivateLabel
    }

    return (
        <div>
            <div
                className={styles['button']}
                onClick={() => {
                    props.onSubmit()
                }}
            >{getLabel()}</div>
        </div>
    )
}