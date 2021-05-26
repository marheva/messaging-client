import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { AuthScreen, DashboardScreen, ContactsAPIScreen, ContactsCSVScreen } from '../../screens';
import { AuthLayout, MainLayout } from '../../App/core/layouts';
import { AppState } from '../../redux/rootReducer';

function Routes() {
    const isLogined = useSelector(({ user }: AppState) => user.isLogined);

    return (
        <Switch>
            {isLogined
                ? <MainLayout >
                    <Route path={'/'} exact component={() => <DashboardScreen />} />
                    <Route path={'/external-contacts'} component={() => <ContactsAPIScreen />} />
                    <Route path={'/contacts'} component={() => <ContactsCSVScreen />} />
                </MainLayout>
                : <AuthLayout >
                    <Route path={'/login'} component={() => <AuthScreen />} />
                </AuthLayout>
            }
        </Switch>
    );
}

export default Routes;
