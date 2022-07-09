// react
import React from 'react'

type Props = {
    productionNum: number,
    selectedNum: number,
}

export default (props: Props): JSX.Element => {

    const optionElements = (productionNum: number): React.ReactNode => {
        let options: JSX.Element[] = []

        for (let i: number = 0; i < productionNum; i ++) {
            if (props.selectedNum !== i) {
                options.push(<option value={i} key={i}>{String(i).padStart(2, '0')}</option>)
            } else {
                options.push(<option selected value={i} key={i}>{String(i).padStart(2, '0')}</option>)
            }
        }
        return options
    }

    return (
        <div>
            <select>
                {optionElements(props.productionNum)}
            </select>
        </div>
    )
}