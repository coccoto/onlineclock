// react
import React from 'react'
// hooks
import useTimeElement from '@/scripts/hooks/useTimeElement'
// contexts
import Context from '@/scripts/contexts/context'
// utils
import alarmCalculate from '@/scripts/utils/alarmCalculate'

type Props = {
}

export default (props: Props): JSX.Element  => {

    const context = React.useContext(Context.Context)
    const timeElement = useTimeElement()

    const [forceUpdate, setForceUpdate] = React.useState<boolean>(false)

    React.useEffect(() => {
        setTimeout(() => {
            setForceUpdate(! forceUpdate)
        }, 1000)
    }, [forceUpdate])

    const countUpdate = (): JSX.Element => {
        const dispTime: StateTime = alarmCalculate.getRemaining(context.stateDateTime)

        return (
            timeElement.createElement([dispTime.hours, dispTime.minutes, dispTime.seconds])
        )
    }

    return (
        countUpdate()
    )
}