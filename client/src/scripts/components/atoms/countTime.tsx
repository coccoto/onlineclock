// react
import React from 'react'

type Props = {
    number: number
}

export default (props: Props): JSX.Element  => {

    return (
        <div>{props.number}</div>
    )
}