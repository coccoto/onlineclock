import React from 'react'
// organisms
import Main from '@/scripts/components/organisms/main'
import Menu from '@/scripts/components/organisms/menu'
// templates
import Footer from '@/scripts/components/templates/footer'
// styles
import styles from '@/styles/index.module.sass'

export default () => {

    return (
        <div className={styles['container']}>
            <Main></Main>
            <Footer></Footer>
            <Menu></Menu>
        </div>
    )
}