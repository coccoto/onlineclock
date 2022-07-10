// react
import React from 'react'
// atoms
import Button from '@/scripts/components/atoms/button'
// molecules
import SelectTimeForm from '@/scripts/components/molecules/alarm/selectTimeForm'
// hooks
import useTimeElement from '@/scripts/hooks/useTimeElement'
// contexts
import Context from '@/scripts/contexts/context'

type Handler = {
    setSelectTime: () => void,
}

export default (): JSX.Element  => {3

    const context = React.useContext(Context.Context)

    const refSelectTimeForm = React.useRef<Handler>(null)
    const [isRun, setIsRun] = React.useState(false)

    const timeElement = useTimeElement()

    const activateAlarm = (): void => {
        if (refSelectTimeForm.current === null) {
            throw new Error()
        }
        refSelectTimeForm.current.setSelectTime()
        setIsRun(! isRun)
    }

    const deactivateAlarm = () => {
        setIsRun(! isRun)
    }

    return (
        <div>
            {! isRun
                ?   <SelectTimeForm ref={refSelectTimeForm}></SelectTimeForm>
                :   timeElement.createElement([
                        context.selectTime.hours,
                        context.selectTime.minutes,
                        context.selectTime.seconds,
                    ])
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