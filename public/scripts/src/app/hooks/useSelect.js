import React from 'react'

/**
 * @param {number} num
 * @param {array}
 */
export default (num) => {

    const options = []

    for(let i = 0; i <= num; i ++) {
        options.push(<option value={i} key={i}>{i}</option>)
    }

    return options
}