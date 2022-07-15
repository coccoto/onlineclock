// react
import React from 'react'

type ContextType = {
    stateDateTime: StateDateTime,
    setStateDateTime: React.Dispatch<React.SetStateAction<StateDateTime>>
}

type Props = {
    children: React.ReactNode;
}

const Context = React.createContext<ContextType>({
    stateDateTime: {
        year: 0,
        month: 0,
        date: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    },
    setStateDateTime: () => {},
})

const ContextProvider = (props: Props): JSX.Element => {
    const context: ContextType = React.useContext(Context)
    const [stateDateTime, setStateDateTime] = React.useState(context.stateDateTime)
    const shareContext = {stateDateTime, setStateDateTime}

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