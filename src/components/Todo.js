import React from 'react';

const ToDo = (props) => {
    const { task, id, complete } = props.todo;
    const { toggleComplete } = props;

    return (
        <div onClick={() => toggleComplete(id)}>
            <p className={complete ? 'complete' : null}>
                {task}    
            </p>
        </div>
    )
};

export default ToDo;