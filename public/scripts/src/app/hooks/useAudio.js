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

    return {
        play: play,
        pause: pause,
    }
}