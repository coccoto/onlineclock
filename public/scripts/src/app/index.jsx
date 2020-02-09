import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// components
import Action from './components/action'
import Form from './components/form'
// constants
import Path from './constants/path'

export default () => {

    console.log('Index')

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
                <Route exact path={Path('clock')}>
                    <Action bool={true} />
                </Route>
                <Route exact path={[Path('alarm'), Path('timer')]}>
                    <Form
                        handleSubmit={(i) => {handleSubmit(i)}}
                        label={'SET'} />
                    <Action
                        time={time}
                        bool={bool.run}
                        setBool={() => {setBool({run: false})}}
                        label={'OFF'} />
                </Route>
            </Switch>
        </Router>
    )
}