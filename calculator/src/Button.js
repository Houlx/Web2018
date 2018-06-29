import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    onClick = () => {
        this.props.clickHandler(this.props.name);
    };

    render() {
        return (
            <div>
                <button onClick={this.onClick}>
                    {this.props.name}
                </button>
            </div>
        );

    }
}

Button.propTypes = {
    name: PropTypes.string,
    clickHandler: PropTypes.func,
};

export default Button;