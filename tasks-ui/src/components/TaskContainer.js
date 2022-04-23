import React, { useEffect }  from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import {useDispatch} from 'react-redux'
import { startGetItem } from "../action/tasksAction";
const TaskContainer=(props)=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(startGetItem())
    },[dispatch])
    return(
        <div>
            <TaskList/>
            <AddTask/>
        </div>
    )
}
export default TaskContainer