// react
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// organisms
import AlarmTimer from '@/scripts/components/organisms/alarmTimer'
// contexts
import Context from '@/scripts/contexts/context'
// styles
import styles from '@/styles/components/organisms/main.module.sass'

export default () => {

    return (
        <div className={styles['container']}>
            <BrowserRouter>
                <Context.Provider>
                    <Routes>
                        <Route path={'/'} element={<AlarmTimer isTimer={false}></AlarmTimer>}></Route>
                        <Route path={'/timer'} element={<AlarmTimer isTimer={true}></AlarmTimer>}></Route>
                    </Routes>
                </Context.Provider>
            </BrowserRouter>
        </div>
    )
}