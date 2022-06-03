import React, { useContext } from "react";
import TaskActions from "./TaskAction";
import { TaskBoardContext } from "./TaskBoard";
import TaskForm from "./TaskForm";
import TasksList from "./TasksList";


const Tasks = () => {
    const {state} = useContext(TaskBoardContext)

    return (
        <div className="d-grid gap-3 m-3">
            <div>
                <TaskActions />
            </div>
            <div>
               {state.selectedTask && <TaskForm />}
            </div>
            <div>
                <TasksList />
            </div>
        </div>
    )
}

export default Tasks;