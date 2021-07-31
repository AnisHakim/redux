
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { filterTask, updateTextFilter } from "../../JS/Actions/Action"
const FilterTask = () => {
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch();
    return (
        <div className="filter">
            <input type="text"
                onChange={(e) => dispatch(updateTextFilter(e))}
                value={filter} />
            <button onClick={() => dispatch(filterTask(filter))}>Filter</button>
        </div>
    )

}

export default FilterTask
