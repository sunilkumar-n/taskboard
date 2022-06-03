import React from "react";

const TaskStatusLabel = () => {

    return (
        <div className="w-100 p-3 text-end">
            <p className="text-danger inline">Elapsed</p>
            <p className="text-warning inline">Deadline nearing</p>
            <p className="text-success inline">Completed</p>
        </div>
    )
}

export default TaskStatusLabel;