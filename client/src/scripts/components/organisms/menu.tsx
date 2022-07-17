// react
import React from 'react'
// atoms
import MenuItem from '@/scripts/components/atoms/menuItem'
// utils
import FetchApi from '@/scripts/utils/common/fetchApi'
// styles
import styles from '@/styles/components/organisms/menu.module.sass'

export default () => {

    const [path, setPath] = React.useState<MstPathType>({
        result: [{name: '', path: ''}]
    })

    React.useEffect(() => {
        const fetchApi = async () => {
            const data = await FetchApi('/api/getMstPath')
            await setPath(data)
        }
        fetchApi()
    }, [])

    return (
        <div className={styles['container']}>
            {path.result.map((value: MstPathValueType, i: number): JSX.Element => {
                return (
                    <div
                        key={i}
                    className={value['path'] === location.pathname ? styles['wrapper-item-selected'] : styles['wrapper-item']}>
                        <MenuItem
                            label={value['name']}
                            path={value['path']}
                        ></MenuItem>
                    </div>
                )
            })}
        </div>
    )
}