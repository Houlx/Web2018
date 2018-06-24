import {ADD_SCORE} from './actionTypes';
import moment from 'moment';

let nextRecordId = 0;

export const addScore = (score) => ({
    type: ADD_SCORE,
    id: nextRecordId++,
    score: score,
    date: moment().format("M/DD HH:mm")
});
