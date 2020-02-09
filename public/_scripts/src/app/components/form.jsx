import React from 'react'
// elements
import Button from './../elements/button'
import Input from './../elements/input'
// constants
import Class from '../constants/class'

export default (props) => {

    const [bool, setBool] = React.useState({submit: false})

    return(
        <form 
            className={props.classSheet + ' ' + Class.components.frame.form + ' ' + Class.states.width.percent}
            onSubmit={(event) => {event.preventDefault()}} >

            <Input
                bool={bool.submit}
                handleSubmit={props.handleSubmit}
                setBool={() => {setBool({submit: false})}}
            ></Input>
            <Button
                classSheet={Class.components.frame.formButton}
                onClick={() => {setBool({submit: true})}}
                label={props.label}
            ></Button>
        </form>
    )
}