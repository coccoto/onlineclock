import React from 'react'
// elements
import Button from './../elements/button'
import Select from './../elements/select'

export default (props) => {

    console.log('Form')

    const [bool, setBool] = React.useState({submit: false})

    return(
        <form onSubmit={(event) => {event.preventDefault()}}>
            <Select
                bool={bool.submit}
                setBool={() => {setBool({submit: false})}}
                handleSubmit={props.handleSubmit} />
            <Button
                onClick={() => {setBool({submit: true})}}
                label={props.label} />
        </form>
    )
}