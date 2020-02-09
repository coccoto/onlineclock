import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// constants
import path from './../constants/path'
// hooks
import useSelect from './../hooks/useSelect'

export default (props) => {

    console.log('Select')

    const [time, setTime] = React.useState({
        hour: 0,
        minute: 0,
        second: 0,
    })

    React.useEffect(() => {
        if (props.bool) {
            props.handleSubmit(time)
            props.setBool()
        }
    }, [props.bool])

    const handleChange = (event) => {
        const target = event.target

        setTime({
            ...time,
            [target.name]: target.value,
        })
    }

    return(
        <Router>
            <div>
                <span>
                    <select
                        name={'hour'}
                        onChange={handleChange}
                    >{useSelect(23)}</select>
                </span>
                <span>：</span>
                <span>
                    <select
                        name={'minute'}
                        onChange={handleChange}
                    >{useSelect(59)}</select>
                </span>
                <Route exact path={path('timer')}>
                    <span>：</span>
                    <span>
                        <select
                            name={'second'}
                            onChange={handleChange}
                        >{useSelect(59)}</select>
                    </span>
                </Route>
            </div>
        </Router>
    )
}