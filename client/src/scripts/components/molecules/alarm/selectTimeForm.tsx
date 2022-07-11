// react
import React from 'react'
// atoms
import SelectTime from '@/scripts/components/atoms/selectTime'
// contexts
import Context from '@/scripts/contexts/context'
// utils
import selectDate from '@/scripts/utils/selectDate'

type Props = {
}

export default React.forwardRef((props: Props, ref): JSX.Element => {

    const context = React.useContext(Context.Context)

    const refSelectTime = {
        hours: React.useRef<HTMLSelectElement>(null),
        minutes: React.useRef<HTMLSelectElement>(null),
        seconds: React.useRef<HTMLSelectElement>(null),
    }

    React.useImperativeHandle(ref, () => ({
        setSelectTime: () => {setSelectTime()}
    }));

    const setSelectTime = (): void => {
        if (refSelectTime.hours.current === null || refSelectTime.minutes.current === null || refSelectTime.seconds.current === null) {
            throw new Error()
        }
        const dateInfo: SelectTime = selectDate().alarm(context.selectTime)
        context.setSelectTime({
            year: dateInfo.year,
            month: dateInfo.month,
            date: dateInfo.date,
            hours: Number(refSelectTime.hours.current.value),
            minutes: Number(refSelectTime.minutes.current.value),
            seconds: Number(refSelectTime.seconds.current.value),
        })
    }

    return (
        <div>
            <SelectTime
                productionNum={24}
                selectedNum={context.selectTime.hours}
                ref={refSelectTime.hours}
            ></SelectTime>
            <SelectTime
                productionNum={60}
                selectedNum={context.selectTime.minutes}
                ref={refSelectTime.minutes}
            ></SelectTime>
            <SelectTime
                productionNum={60}
                selectedNum={context.selectTime.seconds}
                ref={refSelectTime.seconds}
            ></SelectTime>
        </div>
    )
})