import React from 'react'

/**
 * @param {string} path
 */
export default (path) => {

    const [audio] = React.useState(new Audio(path))

    React.useEffect(() => {
        audio.addEventListener('ended', () => {
            play()
        })

        return () => {
            audio.removeEventListener('ended', () => {
                play()
            })
        }
    }, [])

    const play = () => {
        audio.play()
    }

    const pause = () => {
        audio.pause()
        audio.currentTime = 0
    }

    const muted = (bool) => {
        audio.muted = bool
    }

    const unlock = () => {
        muted(true)
        play()
        pause()
        muted(false)
    }

    return {
        play: play,
        pause: pause,
        muted: muted,
        unlock: unlock,
    }
}