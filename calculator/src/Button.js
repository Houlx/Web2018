import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    handleClick = () => {
        this.props.clickHandler(this.props.name);
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
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