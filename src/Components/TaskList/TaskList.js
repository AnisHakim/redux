import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import { useSelector } from "react-redux"


const TaskList = () => {
    const taskList = useSelector(state => state.tasklist)
    return (
        <div>
            {taskList.map((todo, index) =>
                <TaskItem
                    todo={todo}
                    key={index} />
            )}

        </div>
    )
}

export default TaskList
