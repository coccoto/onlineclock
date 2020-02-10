import React from 'react'
// hooks
import usePad from './../hooks/usePad'

/**
 * @param {number} num
 * @param {array}
 */
export default (num) => {

    const select = []

    for(let i = 0; i <= num; i ++) {
        select.push(<option value={i} key={i}>{usePad(i)}</option>)
    }

    return select
}