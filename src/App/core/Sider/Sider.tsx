import React from 'react';
import { withRouter } from 'react-router-dom';
import AppNavigation from '../../../Components/AppNavigation';


interface SiderMenuProps {
    history: { location: { pathname: string }; push: (arg0: string) => void };
}
interface MenuItemPropsTypes {
    title: string | JSX.Element;
    linkTo: string;
    disabled: boolean;
    render: boolean;
}

function Sider({ history, ...props }: SiderMenuProps) {

    const appMenuItems: MenuItemPropsTypes[] = [
        {
            title: 'Dashboard',
            linkTo: '/',
            disabled: false,
            render: true
        },
        {
            title: <p>External API Contacts</p>,
            linkTo: '/external-contacts',
            disabled: false,
            render: true
        },
        {
            title: <p>CSV Contacts</p>,
            linkTo: '/contacts',
            disabled: false,
            render: true
        },
    ];

    return (
        <AppNavigation history={history} menuItems={appMenuItems} mode={'vertical-left'} />
    );
}

export default withRouter(Sider);