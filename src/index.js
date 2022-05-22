import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import storage from './utils/storage';
import { setAuthorizationHeader } from './api/client';
import { createBrowserHistory } from 'history';

import Root from './components/Root';

import configureStore from './store';

const accessToken = storage.get('auth');
setAuthorizationHeader(accessToken);

const history = createBrowserHistory();

const store = configureStore({
  auth: !!accessToken},{history});





ReactDOM.render(
  <React.StrictMode>
    <Root store ={store} history={history}>
        <App isInitiallyLogged={!!accessToken}/>
    </Root>
  </React.StrictMode>,
  document.getElementById('root')
);
