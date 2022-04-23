import React, { useState } from "react";
import EditTask from "./EditTask";
import { useDispatch } from "react-redux";
import { startDeleteItem } from "../action/tasksAction";
const TaskItem = (props) => {
    const { task } = props
    const [toggle, setToggle] = useState(false)
    const dispatch=useDispatch()
    const handleToggle=()=>{
        setToggle(!toggle)
    }
    return (
        <div>
            {
                toggle ?<div>
                    <EditTask task={task} handleToggle={handleToggle}/>
                    <button onClick={handleToggle}>Cancel</button>
                </div>
              :
                    <div>
                        {
                            task.status ? <h2 style={{ color: 'green' }}>{task.title}</h2> : <h2 style={{ color: 'red' }}>{task.title}</h2>
                        }
                        <button onClick={handleToggle}>Edit</button>
                        <button onClick={()=>{dispatch(startDeleteItem(task.id))}}>Delete</button>
                    </div>
          }
        </div>
    )
}
            export default TaskItem