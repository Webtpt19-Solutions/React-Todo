import React from 'react';
import ToDoInput from './components/TodoForm.js';
import ToDoList from './components/TodoList.js';
import './components/Todo.css';

class App extends React.Component {

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: []
    }
  };

  toggleComplete = (id) => {
    const newTodos = this.state.todos.map(item => {
      if(item.id === id){
        return {
          ...item,
          complete: !item.complete
        }
      } else {
        return item
      }
    })

    this.setState({
      todos: newTodos
    })
  };

  clearCompleted = () => {
    const newTodos = this.state.todos.filter(item => !item.complete)
    this.setState({
      todos: newTodos
    })
  };

  addToDo = (todoName) => {
    const newToDo = {
      task: todoName,
      id: Date.now(),
      complete: false
    }
    this.setState({
      todos: [
        ...this.state.todos,
        newToDo
      ]
    })
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoInput 
          addToDo={this.addToDo}
          clearCompleted={this.clearCompleted}
        />
        <ToDoList 
          todos={this.state.todos} 
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;
