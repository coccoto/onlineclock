import React from 'react'
// elements
import Button from './../elements/button'
import Input from './../elements/input'

export default (props) => {

    const [bool, setBool] = React.useState({submit: false})

    return(
        <form onSubmit={(event) => {event.preventDefault()}} >
            <Input
                bool={bool.submit}
                handleSubmit={props.handleSubmit}
                setBool={() => {setBool({submit: false})}}
            ></Input>
            <Button
                onClick={() => {setBool({submit: true})}}
                label={props.label}
            ></Button>
        </form>
    )
}