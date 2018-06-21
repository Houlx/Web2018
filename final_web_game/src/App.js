import React, {Component} from 'react';
import {view as Games} from './game/';
// import {view as Filter} from './components/';
import {view as Menu} from './components/Menu';

const App = ({children}) => {

    return (
        <div>
            <Menu/>
            <div>{children}</div>
            {/*<Games/>*/}
            {/*<Filter/>*/}
        </div>
    );

};

export default App;
