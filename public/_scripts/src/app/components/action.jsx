import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// elements
import Button from './../elements/button'
import Count from './../elements/count'
// hooks
import useClock from './../hooks/useClock'
import useAlarm from './../hooks/useAlarm'
import useTimer from './../hooks/useTimer'
// constants
import Path from './../constants/path'

export default (props) => {

    const [time, setTime] = React.useState({
        hour: 0,
        minute: 0,
        second: 0,
    })

    const [loop, setLoop] = React.useState()

    React.useEffect(() => {
        if (props.bool) {
            setTimeout(update, 0)
            setLoop(setInterval(update, 1000))

            return () => {
                clearInterval(loop)
            }
        }
    }, [props.bool])

    const update = () => {
        let result = []

        switch (location.pathname) {
            case Path.clock:
                result = useClock()
                break
            case Path.alarm:
                result = useAlarm(props.time)
                break
            case Path.timer:
                result = useTimer(props.time)
                break
        }

        setTime({
            hour: result.hour,
            minute: result.minute,
            second: result.second,
        })
    }

    return(
        <div className={props.classSheet + ' ' + 'e-center-items-11 e-width-percent-100'}>
            <Router>
                <Count
                    time={time}
                ></Count>
                <Route exact path={[Path.alarm, Path.timer]}>
                    <Button
                        onClick={() => {
                            clearInterval(loop)
                            props.setBool()
                        }}
                        label={props.label}
                    ></Button>
                </Route>
            </Router>
        </div>
    )
}