import React from 'react';
import TodoListItem from './todo-list-item';
import './todo-list.scss';

const TodoList = ( { todos } ) => {

    const elements = todos.map(item => {

        const { id, ...itemProps } = item;

        return (
            <li key={id}>
                <TodoListItem { ...itemProps }/>
            </li>
        )
    });

    return (
        <ul className="todo-list list-group">
            { elements }
        </ul>
    )
};

export default TodoList;