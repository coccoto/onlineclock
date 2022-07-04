// react
import React from 'react'

type Return = {
    time: Time,
    setTime: React.Dispatch<React.SetStateAction<Time>>,
}

export default (): Return => {

    const [time, setTime] = React.useState<Time>({
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    React.useEffect(() => {
        setInterval(setCurrentTime, 1000)
    }, [])

    const setCurrentTime = () => {
        const date = new Date()

        setTime({
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
        })
    }

    return {
        time: time,
        setTime: setTime,
    }
}