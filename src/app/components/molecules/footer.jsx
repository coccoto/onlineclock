import React from 'react'
// styles
import styles from '@/app/styles/components/molecules/footer.module.sass'

export default () => {

    return (
        <div>
            <footer className={styles['footer']}>
                <p>© 2020 coccoto</p>
            </footer>
            <div className={styles['footer-margin']}></div>
        </div>
    )
}