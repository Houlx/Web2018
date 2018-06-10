import React, {Component} from 'react';
import ItemStore from '../stores/ItemStore';
import Item from './Item';

class List extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        ItemStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        ItemStore.removeChangeListener(this.onChange);
    }

    onChange() {
        const items = ItemStore.getAllItems();
        this.setState({items: items});
    }

    render() {
        let item = this.state.items.map(function (item, index) {
            return <Item name={item["Name"]} chinese={item["Chinese"]} math={item["Math"]} english={item["English"]}/>;
        });

        return (
            <div>
                <div>
                    Name&nbsp;&nbsp;&nbsp;&nbsp;
                    Chinese&nbsp;&nbsp;&nbsp;&nbsp;
                    Math&nbsp;&nbsp;&nbsp;&nbsp;
                    English&nbsp;&nbsp;&nbsp;&nbsp;
                    Total
                </div>
                {item}
            </div>
        );
    }
}

export default List;