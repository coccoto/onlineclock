// react
import React from 'react'

type Props = {
    number: number
}

export default (props: Props): JSX.Element  => {

    return (
        <div>{String(props.number).padStart(2, '0')}</div>
    )
}