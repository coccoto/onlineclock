// react
import React from 'react'

type Props = {
    isRun: boolean,
    onSubmit: () => void,
}

export default (props: Props): JSX.Element  => {

    const getLabel = (): string => {
        return props.isRun ? 'OFF' : 'SET'
    }

    return (
        <div
            onClick={() => {
                props.onSubmit()
            }}
        >{getLabel()}</div>
    )
}