import React,{useState} from "react";
const TaskForm=(props)=>{
    const {id:slno,status:isCompleted,title:name}=props
    const {formSubmit}=props
    const [title,setTitle]=useState(name?name:"")
    const [status,setStatus]=useState(isCompleted?isCompleted:"")
    const handleTitle=(e)=>{
        setTitle(e.target.value)
    }
    const handleStatus=(e)=>{
        setStatus(e.target.checked)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            id:slno?slno:Number(new Date()),
            title,status
        }

        const formReset = () => {
            setStatus(false)
            setTitle('')
        }

        formSubmit(formData, formReset)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Title">Title</label><br/>
                <input type='text' id="Title" value={title} onChange={handleTitle}/><br/>
                <input type='checkbox' id="Status" checked={status} value={status} onChange={handleStatus}/>
                <label htmlFor="Status">Completed</label><br/>
                <input type='submit' value='Save'/>
            </form>
        </div>
    )
}
export default TaskForm