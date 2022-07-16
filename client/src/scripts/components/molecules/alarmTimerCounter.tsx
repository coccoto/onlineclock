// react
import React from 'react'
// hooks
import useTimeElement from '@/scripts/hooks/useTimeElement'
// contexts
import Context from '@/scripts/contexts/context'
// utils
import diffCalculater from '@/scripts/utils/diffCalculater'

type Props = {
    audio: Audio
}

export default (props: Props): JSX.Element  => {

    const context = React.useContext(Context.Context)
    const timeElement = useTimeElement()

    const [forceUpdate, setForceUpdate] = React.useState<boolean>(false)
    const [loop, setLoop] = React.useState<NodeJS.Timer>()

    React.useEffect(() => {
        setLoop(setTimeout(() => {setForceUpdate(! forceUpdate)}, 1000))
    }, [forceUpdate])

    const countUpdate = (): JSX.Element => {
        const dispTime: StateTime = diffCalculater.getRemaining(context.targetDate)

        if (isNotification(context.targetDate)) {
            clearTimeout(loop)
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
            stateDateTime.seconds
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
