// react
import React from 'react'
// hooks
import useTimeElement from '@/scripts/hooks/useTimeElement'
import useLoopWorker from '@/scripts/hooks/useLoopWorker'
// helper
import {
    addSeconds
} from 'date-fns'

type Props = {
    isRun: boolean
}

export default React.forwardRef((props: Props, ref): JSX.Element  => {

    React.useImperativeHandle(ref, () => ({
        countReset: () => {countReset()}
    }));

    const loopWorker = useLoopWorker()
    const timeElement = useTimeElement()

    const defaultCount: Date = new Date(1970, 1, 1, 0, 0, 0)
    const [currentCouter, setCurrentCouter] = React.useState<Date>(defaultCount)

    React.useEffect(() => {
        if (props.isRun) {
            loopWorker.setTimeoutWorker(() => {
                countUpdate()
            }, 1000)
        } else {
            loopWorker.clearTimeoutWorker()
        }
    }, [currentCouter, props.isRun])

    const countUpdate = (): void => {
        const nextCounter = addSeconds(currentCouter, 1)
        setCurrentCouter(nextCounter)
    }

    const countReset = (): void => {
        setCurrentCouter(defaultCount)
    }

    return (
        <div>
            {timeElement.createElement([currentCouter.getHours(), currentCouter.getMinutes(), currentCouter.getSeconds()])}
        </div>
    )
})