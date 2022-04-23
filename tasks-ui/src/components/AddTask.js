import React from "react";
import TaskForm from "./TaskForm";
import { startAddItem } from "../action/tasksAction";
import { useDispatch } from "react-redux";
const AddTask=(props)=>{
    const dispatch=useDispatch()
    const formSubmit=(formData, formReset)=>{
       dispatch(startAddItem(formData, formReset));
    }
    return(
        <div>
            <h2>Add Task</h2>
            <TaskForm formSubmit={formSubmit}/>
        </div>
    )
}
export default AddTask