import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaslItem";
const TaskList = (props) => {
    const tasks = useSelector((state) => {
        return state.tasks
    })
    return (
        <div>
            {tasks.loading ? 'loading' : (
                <div>
                    <h2>Listing Task -{tasks.data.length}</h2>
                    <ul>
                        {
                            tasks.data.map(task => {
                                return (
                                    <TaskItem key={task.id} task={task} />
                                )
                            })
                        }
                    </ul>
                </div>
            )}

        </div>
    )
}
export default TaskList