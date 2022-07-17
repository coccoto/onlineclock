// react
import React from 'react'
// styles
import styles from '@/styles/components/templates/footer.module.sass'

export default (): JSX.Element  => {

    return (
        <div className={styles['container']}>
            <footer className={styles['footer']}>
                <p>© 2022 coccoto</p>
            </footer>
        </div>
    )
}