// react
import React from 'react'
// molecules
import SelectTimeForm from '@/scripts/components/molecules/alarm/selectTimeForm'

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
            <SelectTimeForm></SelectTimeForm>
        </div>
    )
}