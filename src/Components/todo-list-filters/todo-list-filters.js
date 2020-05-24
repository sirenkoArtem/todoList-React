import React, {Component} from "react";
import DefaultInput from "../default-input";
import ItemStatusFilter from "../item-status-filter";
import './todo-list-filters.scss';

export default class TodoListFilters extends Component {

    state = {
        label: '',
        term: ''
    };

    onSearchChange = e => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });

        this.onSearchChange(e);
    };

    render() {
        const { filter, onFilterChange } = this.props;

        return(
            <div className="todo-list-filters">
                <DefaultInput
                    className="default-input form-control"
                    placeholder="search"
                    onChange={ this.onLabelChange }
                    value={this.state.term}/>
                <ItemStatusFilter filter={filter}
                                  onFilterChange={onFilterChange}/>
            </div>
        )
    }
}