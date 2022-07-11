// react
import React from 'react'
// atoms
import Button from '@/scripts/components/atoms/button'
// molecules
import SelectTimeForm from '@/scripts/components/molecules/alarm/selectTimeForm'
import AppAlarm from '@/scripts/components/molecules/alarm/appAlarm'

type Handler = {
    setSelectTime: () => void,
}

export default (): JSX.Element  => {3

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
                :   <AppAlarm></AppAlarm>
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