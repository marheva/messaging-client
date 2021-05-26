import React from 'react';
import { Link } from 'react-router-dom';

import { Menu, MenuItem } from '../CustomComponents/Menu';
import { isActiveMenuItem } from './helpers';

export interface MenuItemPropsTypes {
    title: string | JSX.Element;
    linkTo: string;
    disabled: boolean;
    render: boolean;
}
interface AppNavigationPropsTypes {
    history: { location: { pathname: string }; push: (arg0: string) => void };
    menuItems: MenuItemPropsTypes[];
    mode?: "horizontal" | "vertical" | "vertical-left" | "vertical-right" | "inline" | undefined
}

function AppNavigation({ mode, history, menuItems }: AppNavigationPropsTypes) {
    return (
        <Menu mode={mode}>
            {menuItems.map(
                (item: any) =>
                    item.render && (
                        <MenuItem key={item.linkTo}>
                            <Link
                                style={{ color: isActiveMenuItem(history, item.linkTo) ? 'red' : 'blue' }}
                                to={item.linkTo}
                            >
                                {item.title}
                            </Link>
                        </MenuItem>
                    )
            )}
        </Menu>
    );
}

export default AppNavigation;