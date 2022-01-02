// react
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// atoms
import Button from '@/scripts/components/atoms/button'
import Count from '@/scripts/components/atoms/count'
// hooks
import useAdvanceDate from '@/scripts/hooks/useAdvanceDate'
// models
import addTimeModel from '@/scripts/models/addTimeModel'
import incrementModel from '@/scripts/models/incrementModel'

export default React.forwardRef((props, ref) => {

    React.useImperativeHandle(ref, () => ({
        handleSubmit: (time) => {
            const date = new Date()

            if (props.pathManager.isLocation.timer) {
                const targetDate = addTimeModel(date).add(time)

                setTime({
                    date: advanceDate.getDate(targetDate),
                    hour: targetDate.hour,
                    minute: targetDate.minute,
                    second: targetDate.second,
                })
            } else {
                setTime({
                    date: advanceDate.getDate(time),
                    hour: time.hour,
                    minute: time.minute,
                    second: time.second,
                })
            }
        }
    }))

    const [time, setTime] = React.useState({
        date: 0,
        hour: 0,
        minute: 0,
        second: 0,
    })

    const refLoop = React.useRef()
    const [loop, setLoop] = React.useState()

    const advanceDate = useAdvanceDate(new Date())

    React.useEffect(() => {
        if (props.bool) {
            setTimeout(update, 0)
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
        result = getDisplayTime(result)

        if (refLoop.current !== 0) {
            setTime({
                date: result.date,
                hour: result.hour,
                minute: result.minute,
                second: result.second,
            })
        } else {
            setTime({
                date: 0,
                hour: 0,
                minute: 0,
                second: 0,
            })
        }
    }

    const getDisplayTime = (result) => {
        const date = new Date()

        if (props.pathManager.isLocation.clock) {
            result = { // current time
                date: date.getDate(),
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds(),
            }
        } else if (props.pathManager.isLocation.alarm || props.pathManager.isLocation.timer) {
            result = incrementModel(date).calculate(time, props.pathManager, advanceDate) // time remaining
            notice(result)
        }
        return result
    }

    const notice = (result) => {
        if (result.date !== 0 || (result.hour === 0 && result.minute === 0 && result.second === 0)) {
            clearInterval(refLoop.current)
            refLoop.current = 0
            props.audio.play(0)
        }
    }

    return (
        <Router>
            <div className={props.styles}>
                <Count time={time}></Count>
                <Route exact path={[props.pathManager.path.alarm,  props.pathManager.path.timer]}>
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