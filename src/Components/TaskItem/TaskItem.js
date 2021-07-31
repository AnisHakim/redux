import React from 'react';
import './TaskItem.css';
import { removeTask, completTask, updateTask } from '../../JS/Actions/Action';
import { useDispatch } from 'react-redux';

const TaskItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div className='task'>
      <input
        className={todo.isDone ? 'done' : null}
        style={{ backgroundColor: 'transparent', border: '0' }}
        value={todo.task}
        type='text'
        onChange={(e) => dispatch(updateTask(e.target.value, todo.id))}></input>
      <button
        style={{ marginRight: '5px' }}
        onClick={() => dispatch(completTask(todo.id))}>
        {todo.isDone ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => dispatch(removeTask(todo.id))}>Delete</button>
    </div>
  );
};

export default TaskItem;
