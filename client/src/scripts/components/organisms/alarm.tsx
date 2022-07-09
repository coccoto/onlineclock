// react
import React from 'react'
// atoms
import Button from '@/scripts/components/atoms/button'
// molecules
import SelectTimeForm from '@/scripts/components/molecules/alarm/selectTimeForm'
// hooks
import useTimeElement from '@/scripts/hooks/useTimeElement'
import useCurrentTimeState from '@/scripts/hooks/useCurrentTimeState'
// contexts
import Context from '@/scripts/contexts/context'

export default (): JSX.Element  => {3

    const context = React.useContext(Context.Context)

    const timeElement = useTimeElement()
    const currentTimeState = useCurrentTimeState()

    const [isRun, setIsRun] = React.useState(false)

    return (
        <div>
            {! isRun
                ?   <SelectTimeForm></SelectTimeForm>
                :   timeElement.createElement([
                        currentTimeState.time.hours,
                        currentTimeState.time.minutes,
                        currentTimeState.time.seconds,
                    ])
            }
            <Button
                isRun={isRun}
                setIsRun={setIsRun}
            ></Button>
        </div>
    )
}