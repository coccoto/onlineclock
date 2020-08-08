import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// atoms
import Button from '@/app/components/atoms/button'
import Count from '@/app/components/atoms/count'
// hooks
import useAlarm from '@/app/hooks/useAlarm'
import useRoute from '@/app/hooks/useRoute'
import useTimer from '@/app/hooks/useTimer'
// resources
import Path from '@/app/resources/path'

export default React.forwardRef((props, ref) => {

    React.useImperativeHandle(ref, () => ({
        handleSubmit: (time) => {
            setTime({
                hour: time.hour,
                minute: time.minute,
                second: time.second,
            })
        }
    }))

    const [time, setTime] = React.useState({
        hour: 0,
        minute: 0,
        second: 0,
    })

    const refLoop = React.useRef()
    const [loop, setLoop] = React.useState()

    const route = useRoute()

    React.useEffect(() => {
        if (props.bool) {
            if (route.timer) {
                setTime({
                    hour: time.hour,
                    minute: time.minute,
                    second: time.second,
                })

            } else {
                setTimeout(update, 0)
            }

            setLoop(setInterval(update, 1000))
        }

        return () => {
            clearInterval(refLoop.current)
        }
    }, [props.bool])

    React.useEffect(() => {
        refLoop.current = loop
    })

    const update = () => {
        let result = []

        if (route.clock) {
            const date = new Date()

            result = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds(),
            }

        } else if (route.alarm) {
            result = useAlarm(time)
            notice(result)

        } else if (route.timer) {
            result = useTimer(time)
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
            props.audio.play(0)
        }
    }

    return (
        <Router>
            <div className={props.styles}>
                <Count time={time}></Count>
                <Route exact path={[Path.alarm, Path.timer]}>
                    <Button
                        onClick={() => {
                            clearInterval(loop)
                            props.setBool()
                            props.audio.pause(0)
                        }}
                        label={props.label}
                    ></Button>
                </Route>
            </div>
        </Router>
    )
})