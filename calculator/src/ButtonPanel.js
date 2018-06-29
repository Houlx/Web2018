import Button from './Button';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ButtonPanel.css'

class ButtonPanel extends Component {
    onClick = (buttonName) => {
        this.props.clickHandler(buttonName);
    };

    render() {
        return (
            <div className="button-panel">
                <div>
                    <Button name="AC" clickHandler={this.onClick}/>
                    <Button name="/" clickHandler={this.onClick}/>
                </div>
                <div>
                    <Button name="7" clickHandler={this.onClick}/>
                    <Button name="8" clickHandler={this.onClick}/>
                    <Button name="9" clickHandler={this.onClick}/>
                    <Button name="*" clickHandler={this.onClick}/>
                </div>
                <div>
                    <Button name="4" clickHandler={this.onClick}/>
                    <Button name="5" clickHandler={this.onClick}/>
                    <Button name="6" clickHandler={this.onClick}/>
                    <Button name="-" clickHandler={this.onClick}/>
                </div>
                <div>
                    <Button name="1" clickHandler={this.onClick}/>
                    <Button name="2" clickHandler={this.onClick}/>
                    <Button name="3" clickHandler={this.onClick}/>
                    <Button name="+" clickHandler={this.onClick}/>
                </div>
                <div>
                    <Button name="0" clickHandler={this.onClick}/>
                    <Button name="." clickHandler={this.onClick}/>
                    <Button name="=" clickHandler={this.onClick}/>
                </div>
            </div>
        );
    }
}

ButtonPanel.propTypes = {
    clickHandler: PropTypes.func,
};
export default ButtonPanel;
