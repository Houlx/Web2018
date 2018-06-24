import React, {Component} from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Game from './game';
import Score from './Score';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="score">Score</Link>
                </div>
                <Route exact path="/" component={Game}/>
                <Route exact path="/score" component={Score}/>
            </div>
        );
    }
}

export default App;
