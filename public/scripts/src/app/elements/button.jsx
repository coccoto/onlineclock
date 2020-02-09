import React from 'react'

export default (props) => {

    console.log('Button')

    return(
        <button onClick={() => {props.onClick()}}>{props.label}</button>
    )
}