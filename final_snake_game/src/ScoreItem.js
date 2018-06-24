import React from 'react';
import PropTypes from 'prop-types';

const ScoreItem = ({score, date}) => {
    return (
        <li>
            <label>{score}</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <label>{date}</label>
        </li>
    );
};

ScoreItem.propTypes = {
    score: PropTypes.object.isRequired,
    date: PropTypes.object.isRequired
};

export default ScoreItem;