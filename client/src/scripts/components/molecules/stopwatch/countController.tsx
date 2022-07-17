// react
import React from 'react'
// atoms
import Button from '@/scripts/components/atoms/button'

type Props = {
    isRun: boolean
    activateApp: () => void,
    deactivateApp: () => void,
    countReset: () => void,
}

export default (props: Props): JSX.Element  => {

    return (
        <div>
            <Button
                isRun={props.isRun}
                activateLabel={'STOP'}
                deactivateLabel={'START'}
                onSubmit={props.isRun 
                    ?   () => {props.deactivateApp()}
                    :   () => {props.activateApp()}
                }
            ></Button>
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
    )
}
