import React from 'react'
// constants
import Path from '../constants/path'

export default () => {

    return(
        <ul className={'c-menu c-frame-menu e-width-percent-100'}>
            <li>
                <a className={'c-menu-anchor'} href={Path.clock}>Clock</a>
            </li>
            <li className={'e-border-right-white e-border-left-white'}>
                <a className={'c-menu-anchor'} href={Path.alarm}>Alarm</a>
            </li>
            <li>
                <a className={'c-menu-anchor'} href={Path.timer}>Timer</a>
            </li>
        </ul>
    )
}