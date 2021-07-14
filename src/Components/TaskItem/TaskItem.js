import React from 'react'
import "./TaskItem.css"

const TaskItem = ({todo,handleComplete,handleDelete}) => {
    return (
        <div className="task">
            <p className= {todo.isDone ? "done" : null}>{todo.task}</p>
            <button onClick={()=>handleComplete(todo.id)}>{todo.isDone ? "Undo":"Complete"}</button>
            <button onClick={()=>handleDelete(todo.id)}>Delete</button>
        </div>
    )
}

export default TaskItem
