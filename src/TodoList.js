import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos: [
                { id: uuidv4(), task: 'Go shopping', completed: false }, 
                { id: uuidv4(), task: 'Take a nap!', completed: false }
            ] 
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
    }
    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }
    remove(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        });
    }
    update(id, updatedTodo) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return { ...todo, task: updatedTodo };
            }
            return todo;
        });
        this.setState({ todos: updatedTodos });
    }
    toggleTodo(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        this.setState({ todos: updatedTodos });
    }
    render() { 
        const todos = this.state.todos.map(todo => 
            <Todo
                key={todo.id}
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
                deleteTodo={this.remove}
                updateTodo={this.update}
                toggleTodo={this.toggleTodo}
            />
        );
        return (
            <div className="flex flex-grow items-center justify-center h-full text-gray-600">
                <div className="max-w-full p-8 bg-white rounded-lg shadow-lg w-96">
                    <div className="flex items-center">
                        <i className="fa-solid fa-clipboard-list text-2xl text-indigo-500 stroke-current"></i>
                        <h1 className="text-2xl font-bold font-mono ml-3 text-center py-4">Todo List</h1>
                    </div>
                    <ul className="list-decimal list-inside">{todos}</ul>
                    <NewTodoForm createTodos={this.create} />
                </div>
            </div>
        );
    }
}
 
export default TodoList;