import {ADD_SCORE} from './actionTypes';
import moment from 'moment';

export default (state=[], action) => {
    switch (action.type) {
        case ADD_SCORE: {
            return [
                {
                    id: action.id,
                    score: action.score,
                    date: moment().format("M/DD HH:mm"),
                },
                ...state
            ]
        }
        default:
            return state;
    }
}