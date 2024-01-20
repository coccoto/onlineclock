// react
import React from 'react'
// atoms
import MenuItem from '@/scripts/components/atoms/menuItem'
// utils
import FetchApi from '@/scripts/utils/common/fetchApi'
// styles
import styles from '@/styles/components/organisms/menu.module.sass'

export default () => {

    const [menuList, setMenuList] = React.useState<MstMenuListType>({
        result: [{id: 0, system_name: '', screen_name: '', origin: '', path: ''}]
    })

    React.useEffect(() => {
        const fetchApi = async () => {
            const data = await FetchApi('/api/get/menu-list')
            await setMenuList(data)
        }
        fetchApi()
    }, [])

    return (
        <div className={styles['container']}>
            {menuList.result.map((value: MstMenuListValueType): JSX.Element => {
                return (
                    <div
                        key={value['id']}
                        className={value['path'] === location.pathname ? styles['wrapper-item-selected'] : styles['wrapper-item']}>
                        <MenuItem
                            label={value['screen_name']}
                            path={value['path']}
                        ></MenuItem>
                    </div>
                )
            })}
        </div>
    )
}