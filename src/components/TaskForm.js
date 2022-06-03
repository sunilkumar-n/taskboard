import React, { useContext } from "react";
import { TaskBoardContext } from "./TaskBoard";
import { resetTask, saveTask, updateTask } from "./task";


const TaskForm = () => {
    const { state, dispatch } = useContext(TaskBoardContext)

    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" id="name"
                    value={state.selectedTask ? state.selectedTask.name :""}
                    onChange={(event) => {
                        dispatch(updateTask({
                            field: event.target.id,
                            value: event.target.value
                        }))
                    }}
                />
                {state.taskError && state.taskError["name"] && <div className="invali-feedback">
                    Required
                </div>}
            </div>
            <div className="mb-3">
                <label className="form-label">Priority</label>
                <select className="form-select" id="priority"
                    onChange={(event) => {
                        dispatch(updateTask({
                            field: event.target.id,
                            value: event.target.value
                        }))
                    }}>
                    {
                        state.taskPriority.map((p) => {
                            return <option value={p} key={p}>{p}</option>
                        })
                    }
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Expires</label>
                <input type="datetime-local" className="form-control" id="expires"
                    value={state.selectedTask ? state.selectedTask.expires:""}
                    onChange={(event) => {
                        dispatch(updateTask({
                            field: event.target.id,
                            value: event.target.value
                        }))
                    }} />
                {state.taskError && state.taskError["expires"] && <div className="invali-feedback">
                    Required
                </div>}
            </div>
            <button type="button" className="btn btn-primary"
                onClick={() => {
                    dispatch(saveTask())
                }}>Save</button>
            <button type="button" className="btn btn-default"
                onClick={() => {
                    dispatch(resetTask())
                }}>Cancel</button>
        </form>)
}

export default TaskForm;