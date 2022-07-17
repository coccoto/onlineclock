// react
import React from 'react'

export default () => {

    const [isFirstBoot, setIsFirstBoot] = React.useState<boolean>(true)
    const [isRun, setIsRun] = React.useState<boolean>(false)


    const activateApp = (): void => {
        setIsFirstBoot(false)
        setIsRun(true)
    }

    const deactivateApp = (): void => {
        setIsRun(false)
    }

    return {
        isFirstBoot: isFirstBoot,
        isRun: isRun,
        activateApp: activateApp,
        deactivateApp: deactivateApp,
    }
}