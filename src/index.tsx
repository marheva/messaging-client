import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import 'antd/dist/antd.css';
import App from './App/App';
import { store } from './redux';


ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}><App /></Provider>
  </CookiesProvider>,
  document.getElementById('root')
);
