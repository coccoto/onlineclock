import React from 'react'

export default (props) => {

    return (
        <button 
            className={'c-button e-margin-top-5'}
            type={'button'}
            onClick={() => {props.onClick()}}>
        {props.label}</button>
    )
}