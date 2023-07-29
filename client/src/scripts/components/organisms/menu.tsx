// react
import React from 'react'
// atoms
import MenuItem from '@/scripts/components/atoms/menuItem'
// utils
import FetchApi from '@/scripts/utils/common/fetchApi'
// styles
import styles from '@/styles/components/organisms/menu.module.sass'

export default () => {

    const [path, setPath] = React.useState<MstMenuType>({
        result: [{menuName: '', path: ''}]
    })

    React.useEffect(() => {
        const fetchApi = async () => {
            const data = await FetchApi('/api/getMstMenu')
            await setPath(data)
        }
        fetchApi()
    }, [])

    return (
        <div className={styles['container']}>
            {path.result.map((value: MstMenuValueType, i: number): JSX.Element => {
                return (
                    <div
                        key={i}
                    className={value['path'] === location.pathname ? styles['wrapper-item-selected'] : styles['wrapper-item']}>
                        <MenuItem
                            label={value['menuName']}
                            path={value['path']}
                        ></MenuItem>
                    </div>
                )
            })}
        </div>
    )
}