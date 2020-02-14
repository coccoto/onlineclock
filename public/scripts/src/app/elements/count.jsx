import React from 'react'
// hooks
import usePad from '../hooks/usePad'

export default (props) => {

    React.useEffect(() => {
        if (props.bool) {
            document.title = usePad(props.time.hour) + ' : ' + usePad(props.time.minute) + ' : ' + usePad(props.time.second) + ' - online clock'

        } else {
            document.title = 'online clock'
        }
    })

    return (
        <div className={'c-frame-form-5 s-width-percent-90-30'}>
            <span 
                className={'e-font-2'}>
            {usePad(props.time.hour)}</span>
            <span className={'e-font-1_5'}>：</span>
            <span 
                className={'e-font-2'}>
            {usePad(props.time.minute)}</span>
            <span className={'e-font-1_5'}>：</span>
            <span 
                className={'e-font-2'}>
            {usePad(props.time.second)}</span>
        </div>
    )
}