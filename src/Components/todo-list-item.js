import React from 'react';
import './todo-list-item.scss';

const TodoListItem = ( { label, important = false } ) => {

    const style = {
        color: important ? '#17a2b8' : 'black',
        fontWeight: important ? 800 : 500
    };

    return (
        <span className="todo-list-item list-group-item">
            <span style={style}
                  className="todo-list-item-label">
                  { label }
            </span>

            <div>
                <button type="button"
                         className="btn btn-outline-success btn-sm">
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                        className="btn btn-outline-danger btn-sm">
                    <i className="fa fa-trash-o" />
                </button>
            </div>
        </span>
    );
};

export default TodoListItem;