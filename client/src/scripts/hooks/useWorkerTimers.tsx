// react
import React from 'react'
// helpers


type Return = {
    setTimeoutWorker: (method: () => void, delay: number) => void,
    clearTimeoutWorker: () => void,
}

export default (): Return => {

    const [loopId, setLoopId] = React.useState<NodeJS.Timer>()

    const setTimeoutWorker = (method: () => void, delay: number): void => {
        setLoopId(
            setTimeout(() => {method()}, delay)
        )
    }

    const clearTimeoutWorker = (): void => {
        clearTimeout(loopId)
    }

    return {
        setTimeoutWorker: setTimeoutWorker,
        clearTimeoutWorker: clearTimeoutWorker,
    }
}