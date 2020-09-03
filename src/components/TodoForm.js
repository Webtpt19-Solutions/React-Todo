import React from 'react';

class ToDoInput extends React.Component {
    constructor(){
        super();
        this.state = {
            input: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.input)
        this.setState({
            input: ''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <label>Add a New ToDo!</label>
                    <input 
                        type='text'
                        name='input'
                        value={this.state.input}
                        onChange={this.changeHandler}
                        placeholder='Write a task...'
                    />
                    <button type='submit'>Submit!</button>
                </form>

                <button onClick={() => this.props.clearCompleted()}>
                    Clear Completed
                </button>
            </div>
        )
    }

}

export default ToDoInput;