// react
import React from 'react'
// molecules
import OutputTime from '@/scripts/components/molecules/outputTime'
// hooks
import useLoopWorker from '@/scripts/hooks/useLoopWorker'
// helper
import {
    addSeconds
} from 'date-fns'
// styles
import styles from '@/styles/components/molecules/stopwatch/countUpAction.module.sass'

type Props = {
    isRun: boolean
}

export default React.forwardRef((props: Props, ref): JSX.Element  => {

    React.useImperativeHandle(ref, () => ({
        countReset: () => {countReset()}
    }));

    const loopWorker = useLoopWorker()

    const defaultCount: Date = new Date(1970, 1, 1, 0, 0, 0)
    const [currentCouter, setCurrentCouter] = React.useState<Date>(defaultCount)

    React.useEffect(() => {
        if (props.isRun) {
            countUpdate()
        } else {
            loopWorker.clearTimeoutWorker()
        }
    }, [currentCouter, props.isRun])

    const countUpdate = (): void => {
        loopWorker.setTimeoutWorker(() => {
            const nextCounter = addSeconds(currentCouter, 1)
            setCurrentCouter(nextCounter)
        }, 1000)
    }

    const countReset = (): void => {
        loopWorker.clearTimeoutWorker()
        setCurrentCouter(defaultCount)
        countUpdate()
    }

    return (
        <div>
            <OutputTime
                stateTime={{
                    hours: currentCouter.getHours(),
                    minutes: currentCouter.getMinutes(),
                    seconds: currentCouter.getSeconds(),
                }}
            ></OutputTime>
        </div>
    )
})