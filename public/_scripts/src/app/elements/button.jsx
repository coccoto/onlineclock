import React from 'react'

export default (props) => {

    return(
        <button
            className={props.classSheet + ' ' + 'c-button s-margin-top-5-10'}
            onClick={() => {props.onClick()}}
        >{props.label}</button>
    )
}