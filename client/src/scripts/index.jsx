// react
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// molecules
import Action from '@/scripts/components/molecules/action'
import Form from '@/scripts/components/molecules/form'
// templates
import Footer from '@/scripts/components/templates/footer'
import Menu from '@/scripts/components/templates/menu'
// hooks
import useAudio from '@/scripts/hooks/useAudio'
import usePathManager from '@/scripts/hooks/usePathManager'
// styles
import styles from '@/styles/index.module.sass'
// resources
import sound from '@/resources/sounds/notice.mp3'

export default () => {

    const [bool, setBool] = React.useState({run: false})

    const refAction = React.useRef()

    const pathManager = usePathManager()
    const audio = useAudio(sound)
    
    const handleSubmit = (time) => {
        setBool({run: true})
        audio.unlock()
        refAction.current.handleSubmit(time)
    }

    return (
        <Router>
            <div className={styles['container']}>
                <Switch>
                    <Route exact path={pathManager.path.clock}>
                        <Action
                            styles={styles['fadein']}
                            bool={true}
                            pathManager={pathManager}
                        ></Action>
                    </Route>
                    <Route exact path={[pathManager.path.alarm, pathManager.path.timer]}>
                        <Form
                            styles={! bool.run ? styles['fadein'] : styles['fadeout']}
                            handleSubmit={(i) => {handleSubmit(i)}}
                            label={'SET'}
                        ></Form>
                        <Action
                            styles={bool.run ? styles['fadein'] : styles['fadeout']}
                            bool={bool.run}
                            setBool={() => {setBool({run: false})}}
                            label={'OFF'}
                            audio={audio}
                            pathManager={pathManager}
                            ref={refAction}
                        ></Action>
                    </Route>
                </Switch>
            </div>
            <Footer></Footer>
            <Menu
                pathManager={pathManager}
            ></Menu>
        </Router>
    )
}