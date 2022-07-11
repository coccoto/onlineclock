// react
import React from 'react'
// hooks
import useTimeElement from '@/scripts/hooks/useTimeElement'
// contexts
import Context from '@/scripts/contexts/context'
// utils
import calculationAlarm from '@/scripts/utils/calculationAlarm'

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
        console.log(context.selectTime)

        return (
            <div></div>
        )
    }

    return (
        countUpdate()
    )
}