import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './Components/todo-list';
import AppHeader from './Components/app-header';
import TodoListFilters from "./Components/todo-list-filters";
import './main.scss';

const App = () => {

  const todoData = [
    { label: 'Drink coffee', important: false, id: 1 },
    { label: 'Read a book', important: true, id: 2},
    { label: 'Open the window', important: false, id: 3}
  ];

  return (
    <div className="app-wrapper">
      <AppHeader />
      <TodoListFilters />
      <TodoList todos={todoData} />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
