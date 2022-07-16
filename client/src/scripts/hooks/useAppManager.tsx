// react
import React from 'react'

export default () => {

    const [isRun, setIsRun] = React.useState(false)

    const activateApp = (): void => {
        setIsRun(true)
    }

    const deactivateApp = (): void => {
        setIsRun(false)
    }

    return {
        isRun: isRun,
        activateApp: activateApp,
        deactivateApp: deactivateApp,
    }
}