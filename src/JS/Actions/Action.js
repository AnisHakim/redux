const addTask = (text) => {
  return {
    type: 'ADD_TASK',
    payload: text,
  };
};
const removeTask = (id) => {
  return {
    type: 'REMOVE_TASK',
    payload: id,
  };
};
const completTask = (id) => {
  return {
    type: 'FINISH_TASK',
    payload: id,
  };
};
const updateText = (e) => {
  return {
    type: 'UPDATE_TEXT',
    payload: e,
  };
};
const removeText = () => {
  return {
    type: 'REMOVE_TEXT',
  };
};
const filterTask = (filter) => {
  return {
    type: 'FILTER_TASK',
    payload: filter,
  };
};
const updateTextFilter = (e) => {
  return {
    type: 'UPDATE_FILTER',
    payload: e,
  };
};
const updateTask = (task, id) => {
  return {
    type: 'UPDATE_TASK',
    payload: {
      task: task,
      id: id,
    },
  };
};

export {
  addTask,
  removeTask,
  completTask,
  updateText,
  removeText,
  filterTask,
  updateTextFilter,
  updateTask,
};
