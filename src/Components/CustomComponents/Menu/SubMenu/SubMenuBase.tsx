import { Menu } from 'antd'
import { SubMenuProps } from '../types'

const { SubMenu } = Menu

const SubMenuBase = ({ children, ...props }: SubMenuProps): JSX.Element => {
    return (
        <SubMenu {...props} >
            {!!children && children}
        </SubMenu>
    )
}

export default SubMenuBase
