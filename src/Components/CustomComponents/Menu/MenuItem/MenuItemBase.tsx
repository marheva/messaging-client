import React from 'react'
import { Menu } from 'antd'
import { MenuItemProps } from '../types'

const MenuItemBase = ({ children, ...props }: MenuItemProps): JSX.Element => {
    return (
        <Menu.Item {...props}>
            {!!children && children}
        </Menu.Item>
    )
}

export default MenuItemBase
