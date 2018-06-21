import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import {routerReducer} from 'react-router-redux';

import {reducer as gameReducer} from './game';
// import {reducer as filterReducer} from './components';

// import Perf from 'react-addons-perf';

const win = window;
// win.Perf = Perf;

const reducer = combineReducers({
    game: gameReducer,
    // filter: filterReducer,
    routing: routerReducer,
});

// const middlewares = [];
// if (process.env.NODE_ENV !== 'production') {
//     middlewares.push(require('redux-immutable-state-invariant')());
// }

const storeEnhancers = compose(
    // applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer, {}, storeEnhancers);