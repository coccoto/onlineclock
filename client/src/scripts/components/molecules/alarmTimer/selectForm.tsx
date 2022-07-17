// react
import React from 'react'
// atoms
import SelectTime from '@/scripts/components/atoms/selectTime'
import SeparateTime from '@/scripts/components/atoms/separateTime'
// contexts
import Context from '@/scripts/contexts/context'
// utils
import dateChanger from '@/scripts/utils/dateChanger'
// styles
import styles from '@/styles/components/molecules/alarmTimer/selectForm.module.sass'

type Props = {
    isTimer: boolean
}

export default React.forwardRef((props: Props, ref): JSX.Element => {

    React.useImperativeHandle(ref, () => ({
        handleSubmit: () => {handleSubmit()}
    }));

    const context = React.useContext(Context.Context)

    const refSelectTime = {
        hours: React.useRef<HTMLSelectElement>(null),
        minutes: React.useRef<HTMLSelectElement>(null),
        seconds: React.useRef<HTMLSelectElement>(null),
    }

    const handleSubmit = (): void => {
        if (refSelectTime.hours.current === null || refSelectTime.minutes.current === null || refSelectTime.seconds.current === null) {
            throw new Error()
        }
        const selectedTime: StateTime = {
            hours: Number(refSelectTime.hours.current.value),
            minutes: Number(refSelectTime.minutes.current.value),
            seconds: Number(refSelectTime.seconds.current.value),
        }
        let dateInfo: StateDateTime = {
            year: 0,
            month: 0,
            date: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }

        if (props.isTimer) {
            dateInfo = dateChanger.timerMethod(selectedTime)
        } else {
            dateInfo = dateChanger.alarmMethod(selectedTime)
        }
        context.setTargetDate({
            year: dateInfo.year,
            month: dateInfo.month,
            date: dateInfo.date,
            hours: dateInfo.hours,
            minutes: dateInfo.minutes,
            seconds: dateInfo.seconds,
        })

        context.setSelectedTime({
            hours: selectedTime.hours,
            minutes: selectedTime.minutes,
            seconds: selectedTime.seconds,
        })
    }

    return (
        <div className={styles['container']}>
            <SelectTime
                productionNum={24}
                selectedNum={context.selectedTime.hours}
                ref={refSelectTime.hours}
            ></SelectTime>
            <SeparateTime></SeparateTime>
            <SelectTime
                productionNum={60}
                selectedNum={context.selectedTime.minutes}
                ref={refSelectTime.minutes}
            ></SelectTime>
            <SeparateTime></SeparateTime>
            <SelectTime
                productionNum={60}
                selectedNum={context.selectedTime.seconds}
                ref={refSelectTime.seconds}
            ></SelectTime>
        </div>
    )
})