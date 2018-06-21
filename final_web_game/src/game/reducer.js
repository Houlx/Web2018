import {ADD_SCORE, REMOVE_SCORE} from './actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_SCORE: {
            return [
                {
                    id: action.id,
                    value: action.value,
                },
                ...state
            ]
        }
        case REMOVE_SCORE: {
            return state.filter((scoreItem) => {
                return scoreItem.id !== action.id;
            })
        }
        default: {
            return state;
        }
    }
}