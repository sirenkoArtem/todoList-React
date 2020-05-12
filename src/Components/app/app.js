import React, { Component } from 'react';
import TodoList from "../todo-list";
import AppHeader from "../app-header";
import TodoListFilters from "../todo-list-filters";
import './app.scss';

export default class App extends Component{
    state = {
        todoData: [
            { label: 'Drink coffee', important: false, id: 1 },
            { label: 'Read a book', important: true, id: 2},
            { label: 'Open the window', important: false, id: 3}
        ]
    };

    deleteItem = id => {
      this.setState(({ todoData }) => {
          const idx = todoData.findIndex(el => el.id === id);

          const newArr = [
              ...todoData.slice(0, idx), ...todoData.slice(idx + 1)
          ];

          return{
              todoData: newArr
          }
      });
    };

    render() {
        return(
            <div className="app-wrapper">
                <AppHeader />
                <TodoListFilters />
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={ this.deleteItem }/>
            </div>
        );
    }
}