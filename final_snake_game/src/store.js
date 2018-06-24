import {createStore, combineReducers} from 'redux';
import reducer from './score/reducer';

const reducers = combineReducers({
    scores: reducer,
});

export default createStore(reducers, {});