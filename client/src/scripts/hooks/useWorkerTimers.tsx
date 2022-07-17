// react
import React from 'react'
// helpers
import * as workerTimers from 'worker-timers';

type Return = {
    setWorkerTimeout: (func: Function, delay: number) => void,
    clearWorkerTimeout: () => void,
}

export default (): Return => {

    const [timeoutId, setTimeoutID] = React.useState<number | null>(null)

    const setWorkerTimeout = (func: Function, delay: number): void => {
        setTimeoutID(workerTimers.setTimeout(() => {func()}, delay))
    }

    const clearWorkerTimeout = (): void => {
        if (timeoutId === null) {
            return
        }
        setTimeoutID(null)
        workerTimers.clearTimeout(timeoutId)
    }

    return {
        setWorkerTimeout: setWorkerTimeout,
        clearWorkerTimeout: clearWorkerTimeout,
    }
}