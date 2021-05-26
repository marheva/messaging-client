import React from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import Routes from '../../services/Routes/Routes';
import Auth from '../Auth';

function Root() {
    return (
        <Router >
            <Auth>
                <Routes />
            </Auth>
        </Router>
    );
};

export default Root;
