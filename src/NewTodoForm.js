import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.createTodos({...this.state, id: uuidv4(), completed: false});
        this.setState({ task: "" });
    }
    render() { 
        return (
            <div>
                <form className="flex justify-start" onSubmit={this.handleSubmit}>
                    <button className="flex items-center w-8 h-8 px-2 mt-2 text-sm font-medium rounded">
                        <i className="fa-solid fa-plus"></i>
                    </button>
                    <input
                        type="text"
                        placeholder="New Todo"
                        id="task"
                        name="task"
                        value={this.state.task}
                        onChange={this.handleChange}
                        style={{outline: 'none'}}
                    />
                </form>
            </div>
        );
    }
}
 
export default NewTodoForm;