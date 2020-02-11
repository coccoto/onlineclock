import React from 'react'

export default (props) => {

    return(
        <button 
            className={'c-button e-margin-top-5'}
            onClick={() => {props.onClick()}}>{props.label}</button>
    )
}