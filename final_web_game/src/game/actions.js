import {ADD_SCORE, REMOVE_SCORE} from './actionTypes';

let nextRecordID = 0;

export const addScore = (value) => ({
    type: ADD_SCORE,
    id: nextRecordID++,
    value: value,
});

export const removeScore = (id) => ({
    type: REMOVE_SCORE,
    id: id,
});