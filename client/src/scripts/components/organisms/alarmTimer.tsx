// react
import React from 'react'
// atoms
import Button from '@/scripts/components/atoms/button'
// molecules
import SelectTimeForm from '@/scripts/components/molecules/selectTimeForm'
import AlarmTimerCounter from '@/scripts/components/molecules/alarmTimerCounter'
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

    const appManager = useAppManager()

    const refSelectTimeForm = React.useRef<Handler>(null)
    const audio = useAudio(sound)

    const setSelectTime = () => {
        if (refSelectTimeForm.current === null) {
            throw new Error()
        }
        refSelectTimeForm.current.handleSubmit()
    }

    return (
        <div>
            {! appManager.isRun
                ? <SelectTimeForm
                    ref={refSelectTimeForm}
                    isTimer={props.isTimer}
                  ></SelectTimeForm>
                : <AlarmTimerCounter
                    audio={audio}
                  ></AlarmTimerCounter>
            }
            <Button
                isRun={appManager.isRun}
                activateLabel={'OFF'}
                deactivateLabel={'SET'}
                onSubmit={appManager.isRun 
                    ?   () => {
                            audio.pause()
                            appManager.deactivateApp()
                        }
                    :   () => {
                            audio.unlock()
                            setSelectTime()
                            appManager.activateApp()
                        }
                }
            ></Button>
        </div>
    )
}