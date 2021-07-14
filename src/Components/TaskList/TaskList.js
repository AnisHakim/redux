import React from 'react'
import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({list,handleDelete,handleComplete}) => {
    return (
        <div>
            {list.map((todo,index)=>
            <TaskItem 
            todo={todo} 
            key={index} 
            handleDelete={handleDelete}
            handleComplete={handleComplete}/>
            )}
            
        </div>
    )
}

export default TaskList
