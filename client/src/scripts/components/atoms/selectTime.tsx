// react
import React from 'react'
// styles
import styles from '@/styles/components/atoms/selectTime.module.sass'

type Props = {
    productionNum: number,
    selectedNum: number,
}

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSelectElement>): JSX.Element => {

    const optionElements = (productionNum: number): React.ReactNode => {
        let options: JSX.Element[] = []

        for (let i: number = 0; i < productionNum; i ++) {
            options.push(<option value={i} key={i}>{String(i).padStart(2, '0')}</option>)
        }
        return options
    }

    return (
        <div>
            <select
                className={styles['select']}
                defaultValue={props.selectedNum}
                ref={ref}>
            {optionElements(props.productionNum)}</select>
        </div>
    )
})