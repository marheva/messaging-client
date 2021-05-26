import React from 'react';
import { useSelector } from 'react-redux';
import { useCookies } from "react-cookie";
import { postUserLogout } from '../../Api/utils/rest/auth/fetch';
import { useToggle } from '../../hooks';
import { AppState } from '../../redux/rootReducer';
import { ButtonDanger } from '../CustomComponents/Button';

const LOGOUT_CONTENT = 'Logout'
const LOGIN_COOKIE = 'development'

function UserLogout({ ...props }: UserLogoutPropsTypes): JSX.Element {
    const [loading, setLoading] = useToggle();
    const [cookies, setCookie, removeCookie] = useCookies([]);
    const userInformation = useSelector(({ user }: AppState) => user.user);

    async function logoutUser() {
        setLoading(true)
        const { data: { error } }: any = await postUserLogout()
        if (!error) {
            window.location.reload()
            removeCookie(LOGIN_COOKIE)
        }
        setLoading(false)
    }
    return (
        <ButtonDanger onClick={logoutUser} loading={loading}>{LOGOUT_CONTENT}</ButtonDanger>
    )

}
export default UserLogout