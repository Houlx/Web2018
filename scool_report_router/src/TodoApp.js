import React, {Component} from 'react';
import {Route} from "react-router-dom";
import {Switch} from 'react-router';
import {view as Todos} from './score/';
import {view as Filter} from './filter/';
import NotFound from './404';

class TodoApp extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Todos}/>
                    <Route exact path="/completed" component={Todos}/>
                    <Route exact path="/uncompleted" component={Todos}/>
                    <Route exact path="*" component={NotFound}/>
                </Switch>
                <div>
                    <Filter/>
                </div>
            </div>
        );
    }
}

export default TodoApp;
