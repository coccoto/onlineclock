import React from 'react'
// constants
import Class from '../constants/class'
import Path from '../constants/path'

export default () => {

    return (
        <ul className={'c-frame-menu c-menu'}>
            <li>
                <a className={'c-menu-anchor' + ' ' + Class.element.colorBack.alarm} href={Path.alarm}>Alarm</a>
            </li>
            <li className={'c-menu-border'}>
                <a className={'c-menu-anchor' + ' ' + Class.element.colorBack.clock} href={Path.clock}>Clock</a>
            </li>
            <li>
                <a className={'c-menu-anchor' + ' ' + Class.element.colorBack.timer} href={Path.timer}>Timer</a>
            </li>
        </ul>
    )
}