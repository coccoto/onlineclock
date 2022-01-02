// react
import React from 'react'

export default () => {

    const [path] = React.useState({
        clock: '/',
        alarm: '/alarm',
        timer: '/timer',
    })

    const [isLocation] = React.useState({
        clock: location.pathname === path.clock,
        alarm: location.pathname === path.alarm,
        timer: location.pathname === path.timer,
    })

    return {
        path: path,
        isLocation: isLocation,
    }
}