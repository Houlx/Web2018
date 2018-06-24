import {ADD_SCORE, TOGGLE_SCORE, REMOVE_SCORE} from './actionTypes.js';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_SCORE: {
            return [
                {
                    id: action.id,
                    score: action.score,
                    completed: false
                },
                ...state
            ]
        }
        case TOGGLE_SCORE: {
            return state.map((scoreItem) => {
                if (scoreItem.id === action.id) {
                    return {...scoreItem, completed: !scoreItem.completed};
                } else {
                    return scoreItem;
                }
            })
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
