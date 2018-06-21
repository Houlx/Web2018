import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {addScore} from '../actions.js';

class AddScore extends Component {

    constructor(props, context) {
        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);
        this.onInputs = this.onInputs.bind(this);
        // this.refInput = this.refInput.bind(this);

        this.state = {
            name: '',
            chinese: '',
            math: '',
            english: '',
        };
    }

    onSubmit(ev) {
        ev.preventDefault();

        const score = this.state;
        if (!score.name.trim() ||
            !score.chinese.trim() ||
            !score.math.trim() ||
            !score.english.trim()) {
            return;
        }

        this.props.onAdd(score);
    }

    onInputs(event) {
        let name = event.target.name;
        switch (name) {
            case 'name':
                this.setState({
                    name: event.target.value
                });
                break;
            case 'chinese':
                this.setState({
                    chinese: event.target.value
                });
                break;
            case 'math':
                this.setState({
                    math: event.target.value
                });
                break;
            case 'english':
                this.setState({
                    english: event.target.value
                });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Name</label>
                    <input name={"name"} onChange={this.onInputs} value={this.state.name}/>
                    <label>Chinese</label>
                    <input name={"chinese"} onChange={this.onInputs}
                           value={this.state.chinese}/>
                    <label>Math</label>
                    <input name={"math"} onChange={this.onInputs} value={this.state.math}/>
                    <label>English</label>
                    <input name={"english"} onChange={this.onInputs}
                           value={this.state.english}/>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

AddScore.propTypes = {
    onAdd: PropTypes.func.isRequired
};


const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (score) => {
            dispatch(addScore(score));
        }
    }
};

export default connect(null, mapDispatchToProps)(AddScore);

