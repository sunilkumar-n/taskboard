import React, { useContext } from "react"
import { TaskBoardContext } from "./TaskBoard"
import {addTask} from "./task"

const TaskActions = () => {
    const { dispatch } = useContext(TaskBoardContext)
    return (
        <div>
            <div className="d-inline p-2">
                <button type="button" className="btn btn-primary"
                    onClick={() => {
                        dispatch(addTask())
                    }}>Add Task</button>
            </div>
        </div>
    )
}

export default TaskActions;
