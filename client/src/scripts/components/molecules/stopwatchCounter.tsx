// react
import React from 'react'
// hooks
import useTimeElement from '@/scripts/hooks/useTimeElement'
// helper
import {
    addSeconds
} from 'date-fns'

type Props = {
    isRun: boolean
}

export default (props: Props): JSX.Element  => {

    const timeElement = useTimeElement()

    const [currentCouter, setCurrentCouter] = React.useState<Date>(new Date(1970, 1, 1, 0, 0, 0))

    React.useEffect(() => {
        setTimeout(() => {
            countUpdate()
        }, 1000)
    }, [currentCouter])

    const countUpdate = (): void => {
        const nextCounter = addSeconds(currentCouter, 1)
        setCurrentCouter(nextCounter)
    }

    return (
        <div>
            {timeElement.createElement([currentCouter.getHours(), currentCouter.getMinutes(), currentCouter.getSeconds()])}
        </div>
    )
}
