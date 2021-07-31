import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { useSelector } from 'react-redux';

const TaskList = () => {
  const taskList = useSelector((state) => state.tasklist);
  const filteredList = useSelector((state) => state.filteredList);
  const filter = useSelector((state) => state.filter);
  const list =
    filter.toUpperCase().includes('DONE') ||
    filter.toUpperCase().includes('COMPLETE')
      ? filteredList
      : taskList;
  return (
    <div>
      {list.map((todo, index) => (
        <TaskItem todo={todo} key={index} />
      ))}
    </div>
  );
};

export default TaskList;
