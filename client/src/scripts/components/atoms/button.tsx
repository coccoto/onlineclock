// react
import React from 'react'

type Props = {
    isRun: boolean,
    setIsRun: React.Dispatch<React.SetStateAction<boolean>>,
}

export default (props: Props): JSX.Element  => {

    const getLabel = (): string => {
        return ! props.isRun ? 'SET' : 'OFF'
    }

    return (
        <div
            onClick={() => {
                props.setIsRun(! props.isRun)
            }}
        >{getLabel()}</div>
    )
}