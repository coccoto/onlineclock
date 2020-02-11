import React from 'react'
// constants
import Path from '../constants/path'

export default (props) => {

    console.log(props)

    const classSheet = {
        clock: location.pathname === Path.clock ? 'e-color-back-theme-green' : '',
        alarm: location.pathname === Path.alarm ? 'e-color-back-theme-green' : '',
        timer: location.pathname === Path.timer ? 'e-color-back-theme-green' : '',
    }

    return(
        <ul className={'c-frame-menu c-menu'}>
            <li>
                <a className={'c-menu-anchor' + ' ' + classSheet.alarm}
                    href={Path.alarm}>Alarm</a>
            </li>
            <li className={'c-menu-border'}>
                <a className={'c-menu-anchor' + ' ' + classSheet.clock}
                    href={Path.clock}>Clock</a>
            </li>
            <li>
                <a className={'c-menu-anchor' + ' ' + classSheet.timer}
                    href={Path.timer}>Timer</a>
            </li>
        </ul>
    )
}