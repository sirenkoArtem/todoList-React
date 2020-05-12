import React, {Component} from 'react';
import './todo-list-item.scss';

export default class TodoListItem extends Component{

    // constructor() {
    //     super();
    //     this.state = {
    //         done: false
    //     }
    // }

    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        });
    };

    onImportantClick = () => {
        this.setState(({important}) => {
            return {
                important: !important
            }
        });
    };

    render() {

        const { label, onDeleted } = this.props;
        const { done, important } = this.state;

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
                      onClick={ this.onLabelClick }>
                      { label }
                </span>

                <div>
                    <button type="button"
                            className="btn btn-outline-success btn-sm"
                            onClick={ this.onImportantClick }>
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