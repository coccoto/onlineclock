// react
import React from 'react'
// atoms
import SelectTime from '@/scripts/components/atoms/selectTime'

export default (): JSX.Element => {

    return (
        <div>
            <SelectTime
                productionNum={24}
                selectedNum={0}
            ></SelectTime>
            <SelectTime
                productionNum={60}
                selectedNum={0}
            ></SelectTime>
            <SelectTime
                productionNum={60}
                selectedNum={0}
            ></SelectTime>
        </div>
    )
}