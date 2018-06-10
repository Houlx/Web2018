import React, {Component} from 'react';
import List from './List.js';
import ScoreStore from '../stores/ScoreStore';
import * as Actions from '../Actions';
import Input from "./Input";

class Report extends Component {
    add() {
        let item = ScoreStore.getScoreValues();
        Actions.submit(item);
    }

    render() {
        return (
            <div className="Report">
                <div className="A">
                    <Input caption="Name"/>
                    <Input caption="Chinese"/>
                    <Input caption="Math"/>
                    <Input caption="English"/>
                    <button onClick={this.add}>Submit</button>
                </div>
                <List/>
            </div>
        );
    }
}

export default Report;