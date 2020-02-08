import React from 'react'
// hooks
import usePad from './../hooks/usePad'

export default (props) => {

    return(
        <div>
            <span>{usePad(props.time.hour)}</span>
            <span>：</span>
            <span>{usePad(props.time.minute)}</span>
            <span>：</span>
            <span>{usePad(props.time.second)}</span>
        </div>
    )
}