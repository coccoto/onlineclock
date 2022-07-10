// react
import React from 'react'
// atoms
import CountTime from '@/scripts/components/atoms/countTime'

type Return = {
    createElement: (values: number[]) => JSX.Element
}

export default (): Return => {

    const createElement = (values: number[]): JSX.Element => {
        return (
            <div>
                {
                    values.map((value: number, index: number): JSX.Element => {
                        return <CountTime number={value} key={index}></CountTime>
                    })
                }
            </div>
        )
    }

    return {
        createElement: createElement,
    }
}