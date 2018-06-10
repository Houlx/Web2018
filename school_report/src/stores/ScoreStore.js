import AppDispatcher from '../AppDispatcher';
import * as ActionTypes from '../ActionTypes';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'changed';

const scoreValues = {
    'Name': '',
    'Chinese': 0,
    'Math': 0,
    'English': 0,
};

const ScoreStore = Object.assign({}, EventEmitter.prototype, {
    getScoreValues: function () {
        return scoreValues;
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

});

ScoreStore.dispatchToken = AppDispatcher.register((action) => {
    if (action.type === ActionTypes.INPUT) {
        scoreValues[action.caption] = action.value;
        ScoreStore.emitChange();
    }
});

export default ScoreStore;