const addTask = (text) => {
    return {
        type: "ADD_TASK",
        payload: text,
    }
}
const removeTask = (id) => {
    return {
        type: "REMOVE_TASK",
        payload: id,
    }
}
const completTask = (id) => {
    return {
        type: "FINISH_TASK",
        payload: id,
    }

}
const updateText = (e) => {
    return {
        type: "UPDATE_TEXT",
        payload: e
    }
}
const removeText = () => {
    return {
        type: "REMOVE_TEXT",
    }
}
export { addTask, removeTask, completTask, updateText, removeText }