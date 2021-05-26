import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, } from 'react-router-dom';
import { LoadingLayout } from '../App/core/layouts';
import { AppState } from '../redux/rootReducer';
import { userLogined } from '../redux/userReducer/actions/actions';
interface AuthPropTypes {
    children: JSX.Element
}

function Auth({ children }: AuthPropTypes): JSX.Element {
    const dispatch = useDispatch();
    const history = useHistory();
    const isLogined = useSelector(({ user }: AppState) => user.isLogined);
    const isLoadingScreen = useSelector(({ app }: AppState) => app.loading);

    useEffect(() => {
        dispatch(userLogined())
    }, []);

    useEffect(() => {
        if (isLogined) return history.push('/')
        history.push('/login')
    }, [isLogined])

    return (
        <>
            {!!isLoadingScreen && <LoadingLayout />}
            {!!!isLoadingScreen && children}
        </>
    );

}

export default Auth;
