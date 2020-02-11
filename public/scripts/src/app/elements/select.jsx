import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// constants
import Path from '../constants/path'
import Class from '../constants/class'
// hooks
import useSelect from '../hooks/useSelect'

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
            <div className={Class.cFrame.form + ' ' + 's-width-percent-90-30'}>
                <span>
                    <select
                        className={'e-font-2 e-center-text'}
                        name={'hour'}
                        onChange={handleChange}>
                    {useSelect(23)}</select>
                </span>
                <span className={'e-font-1_5'}>：</span>
                <span>
                    <select
                        className={'e-font-2 e-center-text'}
                        name={'minute'}
                        onChange={handleChange}>
                    {useSelect(59)}</select>
                </span>
                <Route exact path={Path.timer}>
                    <span className={'e-font-1_5'}>：</span>
                    <span>
                        <select
                            className={'e-font-2 e-center-text'}
                            name={'second'}
                            onChange={handleChange}>
                        {useSelect(59)}</select>
                    </span>
                </Route>
            </div>
        </Router>
    )
}