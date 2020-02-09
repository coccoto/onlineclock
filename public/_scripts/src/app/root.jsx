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

    const classSheet = {
        form: bool.run ? 's-fade-out' : 's-fade-in',
        action: bool.run ? 's-fade-in' : 's-fade-out',
    }

    return(
        <Router>
            <div className={'e-height-vh-100 e-center-items-11'}>
                <Switch>
                    <Route exact path={Path.clock}>
                        <Action
                            bool={true}
                        ></Action>
                    </Route>
                    <Route exact path={[Path.alarm, Path.timer]}>
                        <Form 
                            classSheet={classSheet.form}
                            handleSubmit={(i) => {handleSubmit(i)}}
                            label={'SET'}
                        ></Form>
                        <Action
                            classSheet={classSheet.action}
                            time={time}
                            bool={bool.run}
                            setBool={() => {setBool({run: false})}}
                            label={'OFF'}
                        ></Action>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}