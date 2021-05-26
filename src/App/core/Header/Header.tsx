import React from 'react';
import { withRouter } from 'react-router-dom';
import PageHeader from '../../../Components/CustomComponents/PageHeader';
import UserLogout from '../../../Components/UserLogout';
import UserMenu from '../../../Components/UserMenu';


function Header({ history, ...props }: HeaderPropsTypes) {

    return (
        <PageHeader
            extra={[
                <UserMenu />,
                <UserLogout />
            ]}
        />

    )
}

export default withRouter(Header);