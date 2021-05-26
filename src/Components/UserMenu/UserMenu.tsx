import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/rootReducer';
import { ButtonDanger, ButtonGhost } from '../CustomComponents/Button';

function UserMenu({ ...props }: UserMenuPropsTypes): JSX.Element {
    const userInformation = useSelector(({ user }: AppState) => user.user);

    return (
        <ButtonGhost>{!!userInformation?.name && userInformation.name}</ButtonGhost>
    )

}
export default UserMenu