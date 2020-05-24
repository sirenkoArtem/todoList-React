import React, {Component} from 'react';
import './todo-list-item.scss';

export default class TodoListItem extends Component{

    render() {

        const { label, onDeleted,
                onToggleImportant,
                onToggleDone,
                important, done} = this.props;

        let classNames = 'todo-list-item-label';
        if(done) {
            classNames += ' done';
        }

        if(important) {
            classNames += ' important';
        }

        const style = {
            color: important ? '#17a2b8' : 'black',
            fontWeight: important ? 800 : 500
        };

        return (
            <span className="todo-list-item list-group-item">
                <span style={style}
                      className={classNames}
                      onClick={ onToggleDone }>
                      { label }
                </span>

                <div>
                    <button type="button"
                            className="btn btn-outline-success btn-sm"
                            onClick={ onToggleImportant }>
                        <i className="fa fa-exclamation" />
                    </button>

                    <button type="button"
                            className="btn btn-outline-danger btn-sm"
                            onClick={ onDeleted }>
                        <i className="fa fa-trash-o" />
                    </button>
                </div>
            </span>
        );
    }
}