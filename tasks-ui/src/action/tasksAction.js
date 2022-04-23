import axios from 'axios'
export const startAddItem=(formData,formReset)=>{
    return (dispatch)=>{
        axios.post('http://localhost:3033/api/tasks',formData)
        .then((response)=>{
            const taskObj=response.data
            dispatch(addTask(taskObj))
            formReset()
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }
}
export const startGetItem=()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3033/api/tasks')
        .then((response)=>{
            const tasksArr=response.data 
            dispatch(getTask(tasksArr))
            dispatch(toggleLoading())
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }
}
export const startEditItem=(formData,handleToggle)=>{
    return (dispatch)=>{
        axios.put(`http://localhost:3033/api/tasks/${formData.id}`,formData)
        .then((response)=>{
            const taskObj=response.data
            dispatch(editTask(taskObj))
            handleToggle()
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }
}
export const startDeleteItem=(id)=>{
    return(dispatch)=>{
        axios.delete(`http://localhost:3033/api/tasks/${id}`)
        .then((response)=>{
            const taskId=response.data.id
            dispatch(deleteTask(taskId))
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }
}
const addTask=(taskObj)=>{
    return {
        type:'ADD_TASK',payload:taskObj
    }
}
const getTask=(tasksArr)=>{
    return {
        type:'GET_TASKS',payload:tasksArr
    }
}
const editTask=(tasksObj)=>{
    return {
        type:'EDIT_TASK',payload:tasksObj
    }
}
const deleteTask=(taskId)=>{
    return {
        type:'DELETE_TASK',payload:taskId
    }
}

const toggleLoading = () => {
    return {
        type: "TOGGLE_LOADING"
    }
}

