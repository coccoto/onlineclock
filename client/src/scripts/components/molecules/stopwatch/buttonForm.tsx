// react
import React from 'react'
// atoms
import Button from '@/scripts/components/atoms/button'
// styles
import styles from '@/styles/components/molecules/stopwatch/buttonForm.module.sass'

type Props = {
    isRun: boolean
    activateApp: () => void,
    deactivateApp: () => void,
    countReset: () => void,
}

export default (props: Props): JSX.Element  => {

    return (
        <div className={styles['container']}>
            <div className={styles['button']}>
                <Button
                    isRun={props.isRun}
                    activateLabel={'PAUSE'}
                    deactivateLabel={'START'}
                    onSubmit={props.isRun 
                        ?   () => {props.deactivateApp()}
                        :   () => {props.activateApp()}
                    }
                ></Button>
            </div>
            <div className={styles['button']}>
                <Button
                    isRun={false}
                    activateLabel={'RESET'}
                    deactivateLabel={'RESET'}
                    onSubmit={props.isRun 
                        ?   () => {props.countReset()}
                        :   () => {props.countReset()}
                    }
                ></Button>
            </div>
        </div>
    )
}
