import React, { Component } from 'react';
import TodoList from "../todo-list";
import AppHeader from "../app-header";
import TodoListFilters from "../todo-list-filters";
import AddTodoItem from "../add-todo-item/add-todo-item";
import './app.scss';

export default class App extends Component{

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink coffee')
        ],
        term: '',
        filter: 'all' //active, all, done
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = id => {
      this.setState(({ todoData }) => {
          const idx = todoData.findIndex(el => el.id === id);

          const newArr = [
              ...todoData.slice(0, idx),
              ...todoData.slice(idx + 1)
          ];

          return{
              todoData: newArr
          }
      });
    };

    toggleProperty(arr, id, property) {
        const idx = arr.findIndex(el => el.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem,
            [property]: !oldItem[property]};

        return [...arr.slice(0, idx),
                newItem,
                ...arr.slice(idx + 1)];
    };

    addItem = text => {
         const newItem = this.createTodoItem(text);

         this.setState(({ todoData }) => {
             const newTodoData = [
                 ...todoData,
                 newItem
             ];

             return {
                 todoData: newTodoData
             };
         })
    };

    onToggleDone = id => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    };

    onToggleImportant = id => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    };

    search(items, term) {
        if(term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        })
    }

    onSearchChange = term => {
        this.setState({ term });
    };

    onFilterChange = filter => {
        this.setState({filter});
    };

    filterItems(items, filter) {
          switch(filter) {
              case 'all':
                  return items;
              case 'active':
                  return items.filter(item => !item.done);
              case 'done':
                  return items.filter(item => item.done);
              default:
                  return items;
          }
    };

    render() {

        const { todoData, term, filter } = this.state;
        const visibleItems = this.filterItems(
            this.search(todoData, term), filter);

        const doneCounter = todoData
                            .filter(elem => elem.done).length;
        const todoCounter = todoData.length - doneCounter;

        return(
            <div className="app-wrapper">
                <AppHeader todo={todoCounter} done={doneCounter}/>
                <TodoListFilters itemValue={ this.addItem }
                                 onSearchChange={this.onSearchChange}
                                 filter={filter}
                                onFilterChange={this.onFilterChange}/>
                <TodoList
                    todos={visibleItems}
                    onSearchChange={this.onSearchChange}
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone }/>
                <AddTodoItem
                    onAdd={ this.addItem }/>
            </div>
        );
    }
}