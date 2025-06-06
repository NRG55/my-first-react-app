import { Component } from "react";
import Todo from "./Todo";
import Count from "./Count";

class ClassTodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            inputValue: "",
            count: 0
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    };

    handleInputChange(e) {
        this.setState((state) => ({
            ...state,
            inputValue: e.target.value,
        }));
    };

    handleSubmit(e) {
        e.preventDefault();
        this.setState((state) => ({
            todos: state.todos.concat({ id: new Date().getTime(), 
                                        inputValue: state.inputValue, 
                                      }),
            inputValue: "",
            count: state.count + 1
        }));
    };

    handleDelete(e) { 
        const todoId = Number(e.target.parentNode.id);
      
        const updatedTasks = this.state.todos.filter((todo) => todo.id !== todoId);

        this.setState((state) => ({
            ...state,
            todos: updatedTasks,
            count: updatedTasks.length
        }));
    };

    updateTodo(updatedTodo) {
        const updatedTodos = this.state.todos.map((todo) => 
            todo.id === updatedTodo.id ? updatedTodo : todo
        );

        this.setState((state) => ({
                                    ...state,
                                       todos: updatedTodos
                                 }))
    };

    render() {
        return (
            <section>
                <h3>{this.props.name}</h3>                       
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task-entry">Enter a task: </label>
                    <input 
                        type="text" 
                        id="task-entry" 
                        name="task-entry"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange} 
                    />
                    <button type="submit">Submit</button>
                </form>
                <h4>All the tasks (<Count count={this.state.count} />)</h4> 
                             
                <ul>
                    {this.state.todos.map((todo) => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            handleDelete={this.handleDelete} 
                            updateTodo={this.updateTodo}
                        />
                    ))}
                </ul>
            </section>
        );
    };
}

export default ClassTodoList;