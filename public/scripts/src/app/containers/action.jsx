import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// constants
import Path from '../constants/path'
// elements
import Button from '../elements/button'
import Count from '../elements/count'
// hooks
import useAudio from '../hooks/useAudio'
import useClock from '../hooks/useClock'
import useAlarm from '../hooks/useAlarm'
import useTimer from '../hooks/useTimer'

export default (props) => {

    const [time, setTime] = React.useState({
        hour: 0,
        minute: 0,
        second: 0,
    })

    const [loop, setLoop] = React.useState()
    const refLoop = React.useRef()

    const audio = useAudio('/sound/notice.mp3')

    React.useEffect(() => {
        if (props.bool) {
            if (location.pathname === '/timer') {
                setTime({
                    hour: props.time.hour,
                    minute: props.time.minute,
                    second: props.time.second,
                })

                setTimeout(() => {
                    setLoop(setInterval(update, 1000))
                }, 0)

            } else {
                setTimeout(update, 0)
                setLoop(setInterval(update, 1000))
            }

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

        switch (location.pathname) {
            case Path.clock:
                result = useClock()
                break
            case Path.alarm:
                result = useAlarm(props.time)
                notice(result)
                break
            case Path.timer:
                result = useTimer(props.time)
                notice(result)
                break
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
            audio.play()
        }
    }

    return(
        <Router>
            <div className={'e-center-items-11 e-width-percent-100' + ' ' + props.classSheet}>
                <Count time={time} />
                <Route exact path={[Path.alarm, Path.timer]}>
                    <Button
                        onClick={() => {
                            clearInterval(loop)
                            audio.pause()
                            audio.current(0)
                            props.setBool()
                        }}
                        label={props.label} />
                </Route>
            </div>
        </Router>
    )
}