import React from 'react'
// hooks
import usePad from './../hooks/usePad'

/**
 * @param {number} num
 * @param {array}
 */
export default (num) => {

    const [state, setState] = React.useState({
        option: null
    })

    React.useEffect(() => {
        let option = []

        for (let i = 0; i < num; i ++) {
            option.push(<option value={i} key={i}>{usePad(i)}</option>)
        }

        setState({option: option})
    }, [])

    return state.option
}