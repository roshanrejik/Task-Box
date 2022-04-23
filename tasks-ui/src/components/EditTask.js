import React from "react";
import TaskForm from "./TaskForm";
import { useDispatch } from "react-redux";
import { startEditItem } from "../action/tasksAction";
const EditTask=(props)=>{
    const {task,handleToggle}=props
    const dispatch=useDispatch()
    const formSubmit=(formData)=>{
        dispatch(startEditItem(formData,handleToggle))
        
    }
    return(
        <div>
            <h2>Edit Task</h2>
            <TaskForm {...task} formSubmit={formSubmit}/>
        </div>
    )
}
export default EditTask