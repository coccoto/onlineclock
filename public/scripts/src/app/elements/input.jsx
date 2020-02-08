import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// constants
import Path from './../constants/path'

export default (props) => {

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
            <span>
                <input
                    type={'number'}
                    name={'hour'}
                    min={'0'} max={'23'}
                    onChange={handleChange}
                ></input>
            </span>
            <span>：</span>
            <span>
                <input
                    type={'number'}
                    name={'minute'}
                    min={'0'} max={'59'}
                    onChange={handleChange}
                ></input>
            </span>

            <Route exact path={Path.Timer}>
                <span>：</span>
                <span>
                    <input
                        type={'number'}
                        name={'second'}
                        min={'0'} max={'59'}
                        onChange={handleChange}
                    ></input>
                </span>
            </Route>
        </Router>
    )
}