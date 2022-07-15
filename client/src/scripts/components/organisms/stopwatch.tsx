// react
import React from 'react'
// molecules
import StopwatchCounter from '@/scripts/components/molecules/stopwatchCounter'
import CountController from '@/scripts/components/molecules/countController'
// hooks
import useAppManager from '@/scripts/hooks/useAppManager'

type Props = {
}

export default (props: Props): JSX.Element  => {

    const appManager = useAppManager()

    return (
        <div>
            <StopwatchCounter
                isRun={appManager.isRun}
            ></StopwatchCounter>
            <CountController
                isRun={appManager.isRun}
                activateApp={appManager.activateApp}
                deactivateApp={appManager.deactivateApp}
            ></CountController>
        </div>
    )
}