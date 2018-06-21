import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
import ScoreItem from './scoreItem.js';
import {toggleScore, removeScore} from '../actions.js';
import {FilterTypes} from '../../constants.js';

const ScoreList = ({scores, onToggleScore, onRemoveScore}) => {
    return (

            <ul>
                {
                    scores.map((item) => (
                        <ScoreItem
                            key={item.id}
                            score={item.score}
                            completed={item.completed}
                            onToggle={() => onToggleScore(item.id)}
                            onRemove={() => onRemoveScore(item.id)}
                        />
                    ))
                }
            </ul>

    );
};

ScoreList.propTypes = {
    scores: PropTypes.array.isRequired
};

const selectVisibleScores = (scores, filter) => {
    switch (filter) {
        case FilterTypes.ALL:
            return scores;
        case FilterTypes.COMPLETED:
            return scores.filter(item => item.completed);
        case FilterTypes.UNCOMPLETED:
            return scores.filter(item => !item.completed);
        default:
            throw new Error('unsupported filter');
    }
};

const mapStateToProps = (state) => {
    return {
        scores: selectVisibleScores(state.scores, state.filter)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleScore: (id) => {
            dispatch(toggleScore(id));
        },
        onRemoveScore: (id) => {
            dispatch(removeScore(id));
        }
    };
};

/*
const mapDispatchToProps = (dispatch) => bindActionCreators({
  onToggleTodo: toggleScore,
  onRemoveTodo: removeScore
}, dispatch);
*/

export default connect(mapStateToProps, mapDispatchToProps)(ScoreList);

