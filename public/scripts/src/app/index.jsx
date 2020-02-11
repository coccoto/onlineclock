import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// containers
import Action from './containers/action'
import Form from './containers/form'
// elements
import Menu from './elements/menu'
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
        form: ! bool.run ? 's-fade-in' : 's-fade-out',
        action: bool.run ? 's-fade-in' : 's-fade-out',
    }

    return(
        <Router>
            <div className={'e-height-vh-100 e-center-items-11'}>
                <Switch>
                    <Route exact path={Path.clock}>
                        <Action
                            classSheet={'s-fade-in'}
                            bool={true} />
                    </Route>
                    <Route exact path={[Path.alarm, Path.timer]}>
                        <Form
                            handleSubmit={(i) => {handleSubmit(i)}}
                            classSheet={classSheet.form}
                            label={'SET'} />
                        <Action
                            time={time}
                            bool={bool.run}
                            setBool={() => {setBool({run: false})}}
                            classSheet={classSheet.action}
                            label={'OFF'} />
                    </Route>
                </Switch>
            </div>
            <Menu></Menu>
        </Router>
    )
}