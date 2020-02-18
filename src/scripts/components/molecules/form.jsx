import React from 'react'
// atoms
import Button from 'scripts/components/atoms/button'
import Select from 'scripts/components/atoms/select'

export default (props) => {

    const selectRef = React.useRef()

    const handleSubmit = () => {
        selectRef.current.handleSubmit()
    }

    return (
        <div className={props.styles}>
            <Select
                handleSubmit={props.handleSubmit}
                ref={selectRef}
            ></Select>
            <Button
                onClick={() => {handleSubmit()}}
                label={props.label}
            ></Button>
        </div>
    )
}