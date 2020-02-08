import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// components
import Form from './components/form'
import Action from './components/action'
// constants
import Path from './constants/path'

export default () => {

    const [time, setTime] = React.useState({
        hour: 0,
        minute: 0,
        second: 0,
    })

    const [bool, setBool] = React.useState({run: false})

    const handleSubmit = (time) => {
        setTime({
            hour: time.hour,
            minute: time.minute,
            second: time.second,
        })

        setBool({run: true})
    }

    return(
        <Router>
            <Switch>
                <Route exact path={Path.Clock}>
                    <Action
                        bool={true}
                    ></Action>
                </Route>

                <Route exact path={[Path.Alarm, Path.Timer]}>
                    <Form 
                        handleSubmit={(i) => {handleSubmit(i)}}
                        label={'SET'}
                    ></Form>
                    <Action
                        time={time}
                        bool={bool.run}
                        setBool={() => {setBool({run: false})}}
                        label={'OFF'}
                    ></Action>
                </Route>
            </Switch>
        </Router>
    )
}