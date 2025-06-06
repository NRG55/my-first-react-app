import { Component } from "react";

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditActive: false,
            inputValue: this.props.todo.inputValue
        };

        this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleResubmitButtonClick = this.handleResubmitButtonClick.bind(this);
    };

    handleEditButtonClick() {
        this.setState((state) => ({...state, isEditActive: true}));
    }

    handleInputChange(e) {
        this.setState((state) => ({
            ...state,
            inputValue: e.target.value
        }));
    };

    handleResubmitButtonClick() {
        const updatedInputValue = this.state.inputValue;

        this.props.updateTodo({
                                ...this.props.todo,
                                        inputValue: updatedInputValue
                             });

        this.setState((state) => ({...state, 
                                isEditActive: false}));
    };

    render() {
        return (
            <li id={this.props.todo.id}>
                {this.state.isEditActive 
                ?   <>
                        <input
                            type="text"
                            name="todo-edit"
                            value={this.state.inputValue}
                            onChange={this.handleInputChange}
                        />
                        <button onClick={this.handleResubmitButtonClick}>Resubmit</button>
                    </>
                :
                    <>
                        {this.props.todo.inputValue}
                        <button onClick={this.handleEditButtonClick}>Edit</button>
                    </>
                }                
                <button onClick={this.props.handleDelete}>Delete</button>
            </li>
        )
    }
}

export default Todo;