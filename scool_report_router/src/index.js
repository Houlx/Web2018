import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodoApp from './TodoApp';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";

import store from './Store.js';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <TodoApp/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
