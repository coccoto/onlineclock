import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// molecules
import Action from '@/app/components/molecules/action'
import Form from '@/app/components/molecules/form'
// templates
import Footer from '@/app/components/templates/footer'
import Menu from '@/app/components/templates/menu'
// hooks
import useAudio from '@/app/hooks/useAudio'
// resources
import Path from '@/app/resources/path'
// styles
import styles from '@/app/styles/index.module.sass'
// resources
import sound from '@/resources/sounds/notice.mp3'

export default () => {

    const [bool, setBool] = React.useState({run: false})

    const refAction = React.useRef()

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
                    <Route exact path={Path.clock}>
                        <Action
                            styles={styles['fadein']}
                            bool={true}
                        ></Action>
                    </Route>
                    <Route exact path={[Path.alarm, Path.timer]}>
                        <Form
                            styles={! bool.run ? styles['fadein'] : styles['fadeout']}
                            handleSubmit={(i) => {handleSubmit(i)}}
                            label={'SET'}
                        ></Form>
                        <Action
                            styles={bool.run ? styles['fadein'] : styles['fadeout']}
                            bool={bool.run}
                            setBool={() => {setBool({run: false})}}
                            audio={audio}
                            label={'OFF'}
                            ref={refAction}
                        ></Action>
                    </Route>
                </Switch>
            </div>
            <Footer></Footer>
            <Menu></Menu>
        </Router>
    )
}