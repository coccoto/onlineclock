// react
import React from 'react'
// atoms
import MenuItem from '@/scripts/components/atoms/menuItem'
// utils
import FetchApi from '@/scripts/utils/common/fetchApi'
// styles
import styles from '@/styles/components/organisms/menu.module.sass'

export default () => {

    const [menu, setMenu] = React.useState<MstMenuType>({
        result: [{menu_name: '', path: ''}]
    })

    React.useEffect(() => {
        const fetchApi = async () => {
            const data = await FetchApi('/api/getMstMenu')
            await setMenu(data)
        }
        fetchApi()
    }, [])

    return (
        <div className={styles['container']}>
            {menu.result.map((value: MstMenuValueType, i: number): JSX.Element => {
                return (
                    <div
                        key={i}
                    className={value['path'] === location.pathname ? styles['wrapper-item-selected'] : styles['wrapper-item']}>
                        <MenuItem
                            label={value['menu_name']}
                            path={value['path']}
                        ></MenuItem>
                    </div>
                )
            })}
        </div>
    )
}