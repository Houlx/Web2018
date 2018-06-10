import * as ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';

let nextId = 0;

export const input = (caption, value) => {
    AppDispatcher.dispatch({
        type: ActionTypes.INPUT,
        caption: caption,
        value: value
    })
};

export const submit = (item) => {
    AppDispatcher.dispatch({
        type: ActionTypes.SUBMIT,
        item: item
    })
};