// react
import React from 'react'
// atoms
import Button from '@/scripts/components/atoms/button'
// molecules
import SelectTimeForm from '@/scripts/components/molecules/selectTimeForm'
import AlarmCounter from '@/scripts/components/molecules/alarm/alarmCounter'
import TimerCounter from '@/scripts/components/molecules/timer/timerCounter'
// hooks
import useAppManager from '@/scripts/hooks/useAppManager'

type Props = {
    isTimer: boolean
}

type Handler = {
    handleSubmit: () => void,
}

export default (props: Props): JSX.Element  => {

    const appManager = useAppManager()

    const refSelectTimeForm = React.useRef<Handler>(null)

    const setSelectTime = () => {
        if (refSelectTimeForm.current === null) {
            throw new Error()
        }
        refSelectTimeForm.current.handleSubmit()
    }

    return (
        <div>
            {! appManager.isRun
                ? <SelectTimeForm ref={refSelectTimeForm} isTimer={props.isTimer}></SelectTimeForm>
                : props.isTimer
                    ? <TimerCounter></TimerCounter>
                    : <AlarmCounter></AlarmCounter>
            }
            <Button
                isRun={appManager.isRun}
                onSubmit={appManager.isRun 
                    ?   () => {appManager.activateApp()}
                    :   () => {
                            setSelectTime()
                            appManager.deactivateApp()
                        }
                }
            ></Button>
        </div>
    )
}