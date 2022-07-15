// react
import React from 'react'

type ContextType = {
    targetDate: StateDateTime,
    setTargetDate: React.Dispatch<React.SetStateAction<StateDateTime>>,
    selectedTime: StateTime,
    setSelectedTime: React.Dispatch<React.SetStateAction<StateTime>>,
}

type Props = {
    children: React.ReactNode;
}

const Context = React.createContext<ContextType>({
    targetDate: {
        year: 0,
        month: 0,
        date: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    },
    setTargetDate: () => {},
    selectedTime: {
        hours: 0,
        minutes: 0,
        seconds: 0,
    },
    setSelectedTime: () => {},
})

const ContextProvider = (props: Props): JSX.Element => {
    const context: ContextType = React.useContext(Context)
    const [targetDate, setTargetDate] = React.useState(context.targetDate)
    const [selectedTime, setSelectedTime] = React.useState(context.selectedTime)
    const shareContext = {targetDate, setTargetDate, selectedTime, setSelectedTime}

    return (
        <Context.Provider value={shareContext}>
            {props.children}
        </Context.Provider>
    )
}

export default {
    Context: Context,
    Provider: ContextProvider,
}