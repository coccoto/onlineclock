// react
import React from 'react'
// atoms
import Button from '@/scripts/components/atoms/button'
// molecules
import SelectTimeForm from '@/scripts/components/molecules/alarm/selectTimeForm'
import AlarmCounter from '@/scripts/components/molecules/alarm/alarmCounter'

type Handler = {
    setSelectTime: () => void,
}

export default (): JSX.Element  => {

    const refSelectTimeForm = React.useRef<Handler>(null)
    const [isRun, setIsRun] = React.useState(false)

    const activateAlarm = (): void => {
        if (refSelectTimeForm.current === null) {
            throw new Error()
        }
        refSelectTimeForm.current.setSelectTime()
        setIsRun(! isRun)
    }

    const deactivateAlarm = (): void => {
        setIsRun(! isRun)
    }

    return (
        <div>
            {! isRun
                ?   <SelectTimeForm ref={refSelectTimeForm}></SelectTimeForm>
                :   <AlarmCounter></AlarmCounter>
            }
            <Button
                isRun={isRun}
                onSubmit={isRun 
                    ?   () => {deactivateAlarm()}
                    :   () => {activateAlarm()}
                }
            ></Button>
        </div>
    )
}