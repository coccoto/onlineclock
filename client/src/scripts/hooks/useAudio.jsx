// react
import React from 'react'

export default (sound) => {

    const [audio] = React.useState(new Audio(sound))

    React.useEffect(() => {
        audio.addEventListener('ended', () => {
            audio.play()
        })
        return () => {
            audio.removeEventListener('ended', () => {
                audio.play()
            })
        }
    })

    const play = (second = null) => {
        if (second !== null) {
            current(second)
        }
        audio.play()
    }

    const pause = (second = null) => {
        audio.pause()

        if (second !== null) {
            current(second)
        }
    }

    const current = (second = 0) => {
        audio.currentTime = second
    }

    const muted = (bool) => {
        audio.muted = bool
    }

    const unlock = () => {
        muted(true)
        play()
        pause(0)
        muted(false)
    }

    return {
        play: play,
        pause: pause,
        current: current,
        muted: muted,
        unlock: unlock,
    }
}