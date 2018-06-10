import React, {Component, PropTypes} from 'react';
import * as Actions from '../Actions';
import ScoreStore from '../stores/ScoreStore';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ScoreStore.getScoreValues()[props.caption],
            value: 0,
        }
    }

    onInput(event) {
        Actions.input(this.props.caption, event.target.value);
    }

    render() {
        const {caption} = this.props;
        return (
            <div>
                <label>{caption}</label>
                <input onChange={(e) => this.onInput(e)}/>
            </div>
        );
    }
}

export default Input;