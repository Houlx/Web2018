import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import ScoreItem from './ScoreItem';
// import {addScore} from './actions';

const ScoreList = ({scores}) => {
    return (
        <ul>
            {
                scores.map((item) => (
                    <ScoreItem score={item.score} date={item.date}/>
                ))
            }
        </ul>
    );
};

ScoreList.propTypes = {
    scores: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
    return {
        scores: state.scores,
    };
};

export default connect(mapStateToProps, null)(ScoreList);