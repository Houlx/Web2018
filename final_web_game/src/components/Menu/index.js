import React from 'react';
import {Link} from 'react-router';

const liStyle = {
    display: 'inline-block',
    margin: '10px 20px'
};

const view = () => {
    return (
        <div>
            <ul>
                <li style={liStyle}><Link to="/game">Game</Link></li>
                <li style={liStyle}><Link to="/record">Record</Link></li>
            </ul>
        </div>
    );
};

export {view};

