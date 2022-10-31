import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleRemove(e) {
        this.props.deleteTodo(this.props.id);
    }
    toggleForm(e) {
        this.setState({isEditing: !this.state.isEditing});
    }
    handleUpdate(e) {
        e.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({isEditing: !this.state.isEditing});
    }
    toggleCompletion(e) {
        this.props.toggleTodo(this.props.id);
    }
    render() { 
        let result;
        if(this.state.isEditing) {
            result = (
                <form className="flex justify-between" onSubmit={this.handleUpdate}>
                    <input
                        className="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium"
                        type="text"
                        id="task"
                        name="task"
                        value={this.state.task}
                        onChange={this.handleChange}
                        autoFocus
                    />
                    <button className="animate-bounce w-6 h-6 bg-green-500 rounded-xl">
                        <i className="fa-solid fa-check text-white"></i>
                    </button>
                </form>
            );
        } else {
            result = (
                <div className="flex justify-between">
                    <input className={this.props.completed ? "Completed hidden" : "hidden"} type="checkbox" id={this.props.task} />
                    <label className="flex items-center h-10 px-2 rounded cursor-pointer" htmlFor={this.props.task} onClick={this.toggleCompletion}>
                        <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full">
                            <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <span className="ml-4 text-sm">{this.props.task}</span>
                    </label>
                    <div></div>
                    <div>
                        <button onClick={this.toggleForm}>
                            <i className="fa-solid fa-pen-to-square text-edit"></i>
                        </button>
                        <button onClick={this.handleRemove}>
                            <i className="fa-solid fa-trash-can text-delete"></i>
                        </button>
                    </div>
                </div>
            );
        }
        return result;
    }
}
 
export default Todo;