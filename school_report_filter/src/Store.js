import {createStore, combineReducers} from 'redux';

import {reducer as scoreReducer} from './score';
import {reducer as filterReducer} from './filter';

const reducer = combineReducers({
    scores: scoreReducer,
    filter: filterReducer
});

export default createStore(reducer);
