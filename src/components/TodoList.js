// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import ToDo from './Todo.js';

const ToDoList = (props) => {

    return (
        <div>
            {props.todos.map(todo => {
                return <ToDo 
                    key={todo.id}
                    todo={todo}
                    toggleComplete={props.toggleComplete}
                />
            })}
        </div>
    )
};

export default ToDoList
