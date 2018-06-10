import React, {Component, PropTypes} from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let summary = parseFloat(this.props.chinese)
            + parseFloat(this.props.math)
            + parseFloat(this.props.english);

        return (
            <div>
                {this.props.name}&nbsp;&nbsp;&nbsp;&nbsp;
                {this.props.chinese}&nbsp;&nbsp;&nbsp;&nbsp;
                {this.props.math}&nbsp;&nbsp;&nbsp;&nbsp;
                {this.props.english}&nbsp;&nbsp;&nbsp;&nbsp;
                {summary}
            </div>
        );
    }
}

export default Item;