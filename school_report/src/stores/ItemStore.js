import AppDispatcher from '../AppDispatcher';
import * as ActionTypes from '../ActionTypes';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'changed';
let items = [];
const ItemStore = Object.assign({}, EventEmitter.prototype, {
    getAllItems: function () {
        return items;
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

ItemStore.dispatchToken = AppDispatcher.register((action) => {
    if (action.type === ActionTypes.SUBMIT) {
        items.push(action.item);
        ItemStore.emitChange();
    }
});

export default ItemStore;