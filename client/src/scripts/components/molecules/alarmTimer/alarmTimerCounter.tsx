// react
import React from 'react'
// hooks
import useTimeElement from '@/scripts/hooks/useTimeElement'
// contexts
import Context from '@/scripts/contexts/context'
// hooks
import useLoopWorker from '@/scripts/hooks/useLoopWorker'
// utils
import diffCalculater from '@/scripts/utils/diffCalculater'

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

    const timeElement = useTimeElement()

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
            timeElement.createElement([dispTime.hours, dispTime.minutes, dispTime.seconds])
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
        countUpdate()
    )
}
