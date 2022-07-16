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

export default React.forwardRef((props: Props, ref): JSX.Element  => {

    React.useImperativeHandle(ref, () => ({
        countReset: () => {countReset()}
    }));

    const timeElement = useTimeElement()

    const [currentCouter, setCurrentCouter] = React.useState<Date>(new Date(1970, 1, 1, 0, 0, 0))
    const [loop, setLoop] = React.useState<NodeJS.Timer>()

    React.useEffect(() => {
        if (props.isRun) {
            setLoop(setTimeout(() => {countUpdate()}, 1000))
        } else {
            clearTimeout(loop)
        }
    }, [currentCouter, props.isRun])

    const countUpdate = (): void => {
        const nextCounter = addSeconds(currentCouter, 1)
        setCurrentCouter(nextCounter)
    }

    const countReset = (): void => {
        setCurrentCouter(new Date(1970, 1, 1, 0, 0, 0))
    }

    return (
        <div>
            {timeElement.createElement([currentCouter.getHours(), currentCouter.getMinutes(), currentCouter.getSeconds()])}
        </div>
    )
})