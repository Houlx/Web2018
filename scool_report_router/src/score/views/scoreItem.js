import React from 'react';
import PropTypes from 'prop-types';

const ScoreItem = ({onToggle, onRemove, completed, score}) => {
    const checkedProp = completed ? {checked: true} : {};
    let total = parseFloat(score.chinese) +
        parseFloat(score.math) +
        parseFloat(score.english);
    return (
        <li
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            <input className="toggle" type="checkbox" {...checkedProp} readOnly onClick={onToggle}/>
            <label>{score.name}</label>
            <label>{score.chinese}</label>
            <label>{score.math}</label>
            <label>{score.english}</label>
            <label>{total}</label>
            <button onClick={onRemove}>×</button>
        </li>
    )
};


ScoreItem.propTypes = {
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    score: PropTypes.object.isRequired
};

export default ScoreItem;
