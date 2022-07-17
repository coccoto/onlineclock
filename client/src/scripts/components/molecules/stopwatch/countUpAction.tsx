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