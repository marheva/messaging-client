import { MenuProps } from "antd/lib/menu";
import { MenuItemProps } from "antd/lib/menu/MenuItem";
import { SubMenuProps } from "antd/lib/menu/SubMenu";

interface MenuPropsTypes extends MenuProps {}
interface MenuItemPropsTypes extends MenuItemProps {}
interface SubMenuPropsTypes extends SubMenuProps {}

export type MenuProps = React.PropsWithChildren<MenuPropsTypes>;
export type MenuItemProps = React.PropsWithChildren<MenuItemPropsTypes>;
export type SubMenuProps = React.PropsWithChildren<SubMenuPropsTypes>;
