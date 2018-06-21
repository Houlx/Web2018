import {ADD_SCORE, TOGGLE_SCORE, REMOVE_SCORE} from './actionTypes.js';

let nextScoreId = 0;

export const addScore = (score) => ({
    type: ADD_SCORE,
    completed: false,
    id: nextScoreId ++,
    score: score
});

export const toggleScore = (id) => ({
    type: TOGGLE_SCORE,
    id: id
});

export const removeScore = (id) => ({
    type: REMOVE_SCORE,
    id: id
});

