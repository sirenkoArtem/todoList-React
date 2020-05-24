import React from 'react'
import './app-header.scss'

const AppHeader = ({ todo, done }) => {
    return (
        <div className="app-header">
            <h2>Todo list</h2>
            <h5>{todo} more to do, {done} done</h5>
        </div>
    )
};

export default AppHeader