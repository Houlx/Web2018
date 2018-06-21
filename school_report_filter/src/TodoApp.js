import React, {Component} from 'react';
import {view as Todos} from './score/';
import {view as Filter} from './filter/';

class TodoApp extends Component {
    render() {
        return (
            <div>
                <Todos/>
                <Filter/>
            </div>
        );
    }
}

export default TodoApp;
