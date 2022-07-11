// react
import React from 'react'

type ContextType = {
    selectTime: SelectTime,
    setSelectTime: React.Dispatch<React.SetStateAction<SelectTime>>
}

type Props = {
    children: React.ReactNode;
}

const Context = React.createContext<ContextType>({
    selectTime: {
        year: 0,
        month: 0,
        date: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    },
    setSelectTime: () => {},
})

const ContextProvider = (props: Props): JSX.Element => {
    const context: ContextType = React.useContext(Context)
    const [selectTime, setSelectTime] = React.useState(context.selectTime)
    const shareContext = {selectTime, setSelectTime}

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