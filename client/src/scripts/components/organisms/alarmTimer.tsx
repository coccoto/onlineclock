// react
import React from 'react'
// atoms
import Button from '@/scripts/components/atoms/button'
// molecules
import SelectForm from '@/scripts/components/molecules/alarmTimer/selectForm'
import AlarmTimerCounter from '@/scripts/components/molecules/alarmTimer/alarmTimerCounter'
// hooks
import useAppManager from '@/scripts/hooks/useAppManager'
import useAudio from '@/scripts/hooks/useAudio'
// resources
import sound from '@/resources/sounds/notice.mp3'

type Props = {
    isTimer: boolean
}

type Handler = {
    handleSubmit: () => void,
}

export default (props: Props): JSX.Element  => {

    const refSelectForm = React.useRef<Handler>(null)

    const appManager = useAppManager()
    const audio = useAudio(sound)

    const setSelectTime = () => {
        if (refSelectForm.current === null) {
            throw new Error()
        }
        refSelectForm.current.handleSubmit()
    }

    const activateApp = (): void => {
        setSelectTime()
        audio.unlock()
        appManager.activateApp()
    }

    const deactivateApp = (): void => {
        audio.pause()
        appManager.deactivateApp()
    }

    return (
        <div>
            {! appManager.isRun
                ? <SelectForm
                    ref={refSelectForm}
                    isTimer={props.isTimer}
                  ></SelectForm>
                : <AlarmTimerCounter audio={audio}></AlarmTimerCounter>
            }
            <Button
                isRun={appManager.isRun}
                activateLabel={'OFF'}
                deactivateLabel={'SET'}
                onSubmit={appManager.isRun 
                    ? () => {deactivateApp()}
                    : () => {activateApp()}
                }
            ></Button>
        </div>
    )
}