import React from 'react'
// hooks
import usePad from './../hooks/usePad'

export default (props) => {

    return(
        <div className={'c-frame-count s-width-percent-90-50'}>
            <span
                className={'e-font-3'}
            >{usePad(props.time.hour)}</span>
            <span className={'e-font-2'}>：</span>
            <span
                className={'e-font-3'}
            >{usePad(props.time.minute)}</span>
            <span className={'e-font-2'}>：</span>
            <span
                className={'e-font-3'}
            >{usePad(props.time.second)}</span>
        </div>
    )
}