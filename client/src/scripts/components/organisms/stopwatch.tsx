// react
import React from 'react'
// molecules
import CountUpAction from '@/scripts/components/molecules/stopwatch/countUpAction'
import ButtonForm from '@/scripts/components/molecules/stopwatch/buttonForm'
// hooks
import useAppManager from '@/scripts/hooks/useAppManager'

type Props = {
}

type Handler = {
    countReset: () => void,
}

export default (props: Props): JSX.Element  => {

    const refStopwatchController = React.useRef<Handler>(null)

    const appManager = useAppManager()

    const countReset = (): void => {
        if (refStopwatchController.current === null) {
            throw new Error()
        }
        refStopwatchController.current.countReset()
    }

    return (
        <div>
            <CountUpAction
                ref={refStopwatchController}
                isRun={appManager.isRun}
            ></CountUpAction>
            <ButtonForm
                isRun={appManager.isRun}
                activateApp={() => {appManager.activateApp()}}
                deactivateApp={() => {appManager.deactivateApp()}}
                countReset={() => {countReset()}}
            ></ButtonForm>
        </div>
    )
}