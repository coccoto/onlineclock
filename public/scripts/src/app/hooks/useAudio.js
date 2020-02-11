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
    }

    const current = (second) => {
        audio.currentTime = second
    }

    return {
        play: play,
        pause: pause,
        current: current,
    }
}