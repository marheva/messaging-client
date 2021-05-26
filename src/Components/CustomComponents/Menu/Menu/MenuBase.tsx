import { Menu } from 'antd';
import { MenuProps } from '../types';

const MenuBase = ({ children, ...props }: MenuProps): JSX.Element => <Menu {...props}>{!!children && children}</Menu>

export default MenuBase
