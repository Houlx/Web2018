import React, {Component} from 'react';
import ButtonPanel from './ButtonPanel'
import calculate from './logic/calculate'

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: '',
            next: '',
            operation: '',
        };
    }

    onClick = (buttonName) => {
        this.setState(calculate(this.state, buttonName));
    };

    render() {
        return (
            <div>
                <div>
                    {this.state.next || this.state.total || '0'}
                </div>
                <ButtonPanel clickHandler={this.onClick}/>
            </div>
        );
    }
}

export default Calculator;