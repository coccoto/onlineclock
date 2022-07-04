// react
import React from 'react'
// hooks
import useTimeElement from '@/scripts/hooks/useTimeElement'
import useCurrentTimeState from '@/scripts/hooks/useCurrentTimeState'

export default (): JSX.Element  => {

    const timeElement = useTimeElement()
    const currentTimeState = useCurrentTimeState()

    return (
        <div>
            {
                timeElement.createElement([
                    currentTimeState.time.hours,
                    currentTimeState.time.minutes,
                    currentTimeState.time.seconds,
                ])
            }
        </div>
    )
}