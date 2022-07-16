// react
import React from 'react'

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
        <div
            onClick={() => {
                props.onSubmit()
            }}
        >{getLabel()}</div>
    )
}