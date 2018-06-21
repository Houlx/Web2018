import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';

import Routes from './Routes'

import store from './Store';

ReactDOM.render(
    <Routes/>,
    document.getElementById('root')
);