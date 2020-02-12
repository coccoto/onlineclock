import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// constants
import Path from '../constants/path'
// elements
import Button from '../elements/button'
import Count from '../elements/count'
// hooks
import useAlarm from '../hooks/useAlarm'
import useClock from '../hooks/useClock'
import useRoute from '../hooks/useRoute'
import useTimer from '../hooks/useTimer'

export default (props) => {

    const [time, setTime] = React.useState({
        hour: 0,
        minute: 0,
        second: 0,
    })

    const [loop, setLoop] = React.useState()
    const refLoop = React.useRef()

    React.useEffect(() => {
        if (props.bool) {
            if (! useRoute('timer')) {
                setTimeout(update, 0)

            } else {
                setTime({
                    hour: props.time.hour,
                    minute: props.time.minute,
                    second: props.time.second,
                })
            }

            setLoop(setInterval(update, 1000))

            return () => {
                clearInterval(refLoop.current)
            }
        }
    }, [props.bool])

    React.useEffect(() => {
        refLoop.current = loop
    }, [loop])

    const update = () => {
        let result = []

        if (useRoute('clock')) {
            result = useClock()

        } else if (useRoute('alarm')) {
            result = useAlarm(props.time)
            notice(result)

        } else if (useRoute('timer')) {
            result = useTimer(props.time)
            notice(result)
        }

        setTime({
            hour: result.hour,
            minute: result.minute,
            second: result.second,
        })
    }

    const notice = (result) => {
        if (result.hour === 0 && result.minute === 0 && result.second === 0) {
            clearInterval(refLoop.current)
            props.audio.play()
        }
    }

    return (
        <Router>
            <div className={'e-center-items-11 e-width-percent-100' + ' ' + props.classSheet}>
                <Count
                    time={time}
                    bool={props.bool} />
                <Route exact path={[Path.alarm, Path.timer]}>
                    <Button
                        onClick={() => {
                            clearInterval(loop)
                            props.audio.pause()
                            props.setBool()
                        }}
                        label={props.label} />
                </Route>
            </div>
        </Router>
    )
}