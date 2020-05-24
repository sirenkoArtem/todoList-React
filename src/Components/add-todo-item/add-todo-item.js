import React, { Component } from "react";
import DefaultInput from "../default-input";
import "./add-todo-item.scss";

export default class AddTodoItem extends Component{

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.label);
        this.setState({
            label: ''
        })
    };

    render() {

      return (
          <form className="add-todo-item"
                onSubmit={this.onSubmit}>
              <DefaultInput
                  type="text"
                  onChange={this.onLabelChange}
                  className="default-input form-control"
                  placeholder="What needs to be done?"
                  value={this.state.label}/>
              <button type="submit"
                      className="btn btn-outline-secondary">
                      Add
              </button>
          </form>
      )
    }
};