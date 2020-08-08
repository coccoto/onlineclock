import React from 'react'

/**
 * @return {object}
 */
export default () => {

    const create = (num) => {
        let select = []

        for (let i = 0; i <= num; i ++) {
            select.push(<option value={i} key={i}>{String(i).padStart(2, 0)}</option>)
        }

        return select
    }

    return {
        create: create
    }
}