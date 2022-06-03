import React, { useContext } from "react";
import { TaskBoardContext } from "./TaskBoard";
import { reorderTasks, updateStatus } from "./task";
import TaskStatusLabel from "./TaskStatusLabel";


const TasksList = () => {
    const { state, dispatch } = useContext(TaskBoardContext);

    return (
        <>
            {state.tasks.length > 0 && <TaskStatusLabel />}
            <ul className="list-group">
                {
                    state.tasks.map((task,index) => {
                        return (<li className="list-group-item" key={task.name}>
                            <select className="form-select form-select-sm status-combo"
                                onChange={(event) => {
                                    dispatch(updateStatus({
                                        id: task.id,
                                        value: event.target.value
                                    }))
                                }}
                                value={task.status}>
                                {
                                    state.taskStatus.map((ts) => {
                                        return <option value={ts} key={ts}>{ts}</option>
                                    })
                                }
                            </select>
                            <p className={`text-${task.labelType} inline`}>{task.name}</p>
                             <div>
                             <button type="button" className="btn btn-link" 
                             disabled={index === 0}
                             onClick={()=>{
                                 dispatch(reorderTasks({
                                     index:index,
                                     type:"up"
                                 }))
                             }}
                             >Move up</button>
                             <button type="button" className="btn btn-link" 
                             disabled={index === (state.tasks.length-1)}
                             onClick={()=>{
                                dispatch(reorderTasks({
                                    index:index,
                                    type:"down"
                                }))
                            }}>Move Down</button>
                            </div>   
                        </li>)
                    })
                }
            </ul>
        </>
    )
}

export default TasksList;