// react
import React from 'react'
// atoms
import MenuItem from '@/scripts/components/atoms/menuItem'
// utils
import fetchApi from '@/scripts/utils/fetchApi'
// styles
import styles from '@/styles/components/organisms/menu.module.sass'

export default () => {

    const [menuList, setMenuList] = React.useState<MenuListType>({
        result: [{id: 0, system_name: '', screen_name: '', origin: '', path: ''}]
    })

    React.useEffect(() => {
        const postRequest = async () => {
            const response = await fetchApi<MenuListType>('/api/get/menu-list', { method: 'post' })
            await setMenuList(response)
        }
        postRequest()
    }, [])

    return (
        <div className={styles['container']}>
            {menuList.result.map((value: MenuListResultType): JSX.Element => {
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