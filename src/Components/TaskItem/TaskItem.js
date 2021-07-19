import React from 'react'
import "./TaskItem.css"
import { removeTask, completTask } from "../../JS/Actions/Action"
import { useDispatch } from "react-redux"


const TaskItem = ({ todo }) => {
    const dispatch = useDispatch();
    return (
        <div className="task">
            <p className={todo.isDone ? "done" : null}>{todo.task}</p>
            <button onClick={() => dispatch(completTask(todo.id))}>{todo.isDone ? "Undo" : "Complete"}</button>
            <button onClick={() => dispatch(removeTask(todo.id))}>Delete</button>
        </div>
    )
}

export default TaskItem
