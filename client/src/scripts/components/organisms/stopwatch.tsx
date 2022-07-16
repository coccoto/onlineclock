// react
import React from 'react'
// molecules
import StopwatchCounter from '@/scripts/components/molecules/stopwatchCounter'
import CountController from '@/scripts/components/molecules/countController'
// hooks
import useAppManager from '@/scripts/hooks/useAppManager'

type Props = {
}

type Handler = {
    countReset: () => void,
}

export default (props: Props): JSX.Element  => {

    const appManager = useAppManager()

    const refStopwatchController = React.useRef<Handler>(null)

    const countReset = (): void => {
        if (refStopwatchController.current === null) {
            throw new Error()
        }
        refStopwatchController.current.countReset()
    }

    return (
        <div>
            <StopwatchCounter
                ref={refStopwatchController}
                isRun={appManager.isRun}
            ></StopwatchCounter>
            <CountController
                isRun={appManager.isRun}
                activateApp={appManager.activateApp}
                deactivateApp={appManager.deactivateApp}
                countReset={countReset}
            ></CountController>
        </div>
    )
}