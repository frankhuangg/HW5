import React from 'react';
import Sign_in from "./sign_in";
class ToDoList extends React.Component {
    handleChange = event => {
        const updateTodo = {
        ...this.props.todoItems,
        [event.currentTarget.name]: event.currentTarget.value
        };
        console.log(event.currentTarget.value);
        this.props.updateTodos(this.props.index, updateTodo);
    };
  
    toggleCheckbox = event => {
        const updateTodo = {
        ...this.props.todoItems,
        [event.currentTarget.name]: event.currentTarget.checked
        };
        this.props.updateTodos(this.props.index, updateTodo);
    };
  
    render() {
        return (
            <li className={this.props.todoItems.isCompleted ? "done" : null}>
            <input
                type="checkbox"
                name="isCompleted"
                checked={this.props.todoItems.isCompleted}
                onChange={this.toggleCheckbox}
                // checked={this.props.todoItems.isChecked}
            />
            <input
                type="text"
                name="todo"
                value={this.props.todoItems.todo}
                onChange={this.handleChange}
            />
            <button
                className="del-btn"
                onClick={() => this.props.removeToDoItem(this.props.index)}
            > X</button>
            </li>
        );
    }
}

export default ToDoList;