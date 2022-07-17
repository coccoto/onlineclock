// react
import React from 'react'
// molecules
import OutputTime from '@/scripts/components/molecules/outputTime'
// contexts
import Context from '@/scripts/contexts/context'
// hooks
import useLoopWorker from '@/scripts/hooks/useLoopWorker'
// utils
import diffCalculater from '@/scripts/utils/diffCalculater'
// styles
import styles from '@/styles/components/molecules/alarmTimer/countDownAction.module.sass'

type Props = {
    audio: {
        play: () => void,
        pause: () => void,
        unlock: () => void,
    }
}

export default (props: Props): JSX.Element  => {

    const context = React.useContext(Context.Context)
    const loopWorker = useLoopWorker()

    const [forceUpdate, setForceUpdate] = React.useState<boolean>(false)

    React.useEffect(() => {
        loopWorker.setTimeoutWorker(() => {
            setForceUpdate(! forceUpdate)
        }, 1000)
    }, [forceUpdate])

    const countUpdate = (): JSX.Element => {
        let dispTime: StateTime = diffCalculater.getRemaining(context.targetDate)

        if (isNotification(context.targetDate)) {
            loopWorker.clearTimeoutWorker()
            props.audio.play()
        }
        return (
            <OutputTime
                stateTime={{
                    hours: dispTime.hours,
                    minutes: dispTime.minutes,
                    seconds: dispTime.seconds,
                }}
            ></OutputTime>
        )
    }

    const isNotification = (stateDateTime: StateDateTime): boolean => {
        const currentDate: Date = new Date()

        const targetDate: Date = new Date(
            stateDateTime.year,
            stateDateTime.month,
            stateDateTime.date,
            stateDateTime.hours,
            stateDateTime.minutes,
            stateDateTime.seconds - 1,
        )
        if (currentDate.getTime() >= targetDate.getTime()) {
            return true
        } else {
            return false
        }
    }

    return (
        <div>
            {countUpdate()}
        </div>
    )
}
