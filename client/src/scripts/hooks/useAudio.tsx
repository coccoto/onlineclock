// react
import React from 'react'

export default (sound: string) => {

    const [audio] = React.useState(new Audio(sound))
    const [forceUpdate, setForceUpdate] = React.useState<boolean>(false)

    React.useEffect((): () => void => {
        audio.addEventListener('play', () => {setForceUpdate(! forceUpdate)})
        audio.addEventListener('pause', () => {setForceUpdate(! forceUpdate)})
        audio.addEventListener('ended', () => {
            setForceUpdate(! forceUpdate)
            audio.play()
        })
        audio.addEventListener('timeupdate', () => {setForceUpdate(! forceUpdate)})

        return (): void => {
            audio.removeEventListener('play', () => {setForceUpdate(! forceUpdate)})
            audio.removeEventListener('pause', () => {setForceUpdate(! forceUpdate)})
            audio.removeEventListener('ended', () => {
                setForceUpdate(! forceUpdate)
                audio.play()
            })
            audio.removeEventListener('timeupdate', () => {setForceUpdate(! forceUpdate)})
        }
    }, [])

    const play = (): void => {
        audio.play()
    }

    const pause = (): void => {
        audio.pause()
    }

    const setCurrentTime = (targetTime: number): void => {
        audio.currentTime = targetTime
    }

    const muted = (isMuted: boolean): void => {
        audio.muted = isMuted
    }

    const unlock = (): void => {
        muted(true)
        play()
        pause()
        setCurrentTime(0)
        muted(false)
    }

    return {
        play: play,
        pause: pause,
        unlock: unlock,
    }
}