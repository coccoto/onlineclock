// react
import React from 'react'

export default () => {

    const [isRun, setIsRun] = React.useState(false)

    const activateApp = (): void => {
        setIsRun(! isRun)
    }

    const deactivateApp = (): void => {
        setIsRun(! isRun)
    }

    return {
        isRun: isRun,
        activateApp: activateApp,
        deactivateApp: deactivateApp,
    }
}