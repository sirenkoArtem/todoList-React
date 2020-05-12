import React from "react";
import SearchPannel from "../search-pannel";
import ItemStatusFilter from "../item-status-filter";
import './todo-list-filters.scss';

const TodoListFilters = () => {
    return(
        <div className="todo-list-filters">
            <SearchPannel />
            <ItemStatusFilter />
        </div>
    )
};

export default TodoListFilters;