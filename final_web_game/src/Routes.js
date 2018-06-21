import React from 'react';
import {Router, Route, IndexRoute, /*browserHistory*/} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';

import App from './App';
import store from './Store';
import SnakeGame from './game/views/SnakeGame';
import RecordList from './game/views/RecordList';

const createElement = (Component, props) => {
    return (
        <Provider store={store}>
            <Component {...props}/>
        </Provider>
    );
};

// const history = syncHistoryWithStore(browserHistory, store);

const Routes = () => (
    <Router /*history={history}*/ createElement={createElement}>
        <Route path="/" component={App}>
            <IndexRoute component={SnakeGame}/>
            <Route path="game" component={SnakeGame}/>
            <Route path="record" component={RecordList}/>
        </Route>
    </Router>
);

export default Routes;