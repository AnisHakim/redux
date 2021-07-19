import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addTask, updateText, removeText } from "../../JS/Actions/Action"
const AddTask = () => {


    const text = useSelector(state => state.text)
    const dispatch = useDispatch();
    const doubleDispatch = (text) => {
        dispatch(addTask(text));
        dispatch(removeText());
    }
    return (
        <div className="add">
            <input type="text"
                onChange={(e) => dispatch(updateText(e))}
                value={text} />
            <button onClick={() => doubleDispatch(text)}>ADD</button>
        </div>
    )

}

export default AddTask
