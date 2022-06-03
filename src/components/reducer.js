import { differenceInHours } from "date-fns";

import { task } from "./task";
import { list } from "./list";

export const initialState = {
    lists: [],
    tasks: [],
    taskPriority: ["low", "medium", "high"],
    taskStatus: ["new", "in-progress", "done"],
    selectedTask: null,
    selectedList: null,
    isListTitleEditing: false,
    taskError: {
        name: false,
        expires: false
    },
    listError: {
        title: false
    },
    filter: null
}


export const reducer = function (state, action) {
    switch (action.type) {
        case "ADDLIST": {
            let newListCount = state.lists.length + 1;
            let newList = { ...list };
            newList.id = newListCount;
            newList.title = `New List ${newListCount}`;
            return { ...state, lists: [...state.lists, newList], selectedList: newList }
        }
        case "EDITMODE": {
            return { ...state, isListTitleEditing: true, selectedList: state.lists[0] }
        }
        case "TITLEEDIT": {
            let list = { ...state.selectedList };
            list.title = action.payload;
            return { ...state, selectedList: list }
        }
        case "SAVELIST": {
            let validationError = { ...state.listError }
            if (state.selectedList.title === "") {
                validationError.title = true;
            } else {
                validationError.title = false;
            }

            let listsUpdate = state.lists.map((l) => {
                let list = { ...l };
                if (list.id === action.payload.id) {
                    list.title = state.selectedList.title
                }
                return list
            })
            return { ...state, lists: listsUpdate, isListTitleEditing: false }
        }
        case "ADDTASK": {
            let newTaskCount = state.tasks.length + 1;
            let newTask = { ...task };
            newTask.id = newTaskCount;
            newTask.name = `New task ${newTaskCount}`;
            newTask.status = "new";
            return { ...state, selectedTask: newTask }
        }
        case "UPDATETASK": {
            let selectedTask = { ...state.selectedTask };
            selectedTask[action.payload.field] = action.payload.value;
            return { ...state, selectedTask: selectedTask }
        }
        case "SAVETASK": {
            let validationError = { ...state.taskError }
            if (state.selectedTask.name === "") {
                validationError.name = true;
            } else {
                validationError.name = false;
            }
            if (state.selectedTask.expires === "") {
                validationError.expires = true;
            } else {
                validationError.expires = false;
            }
            if (validationError.name || validationError.expires) {
                return { ...state, taskError: validationError }
            }
            let tasksUpdated = [...state.tasks, state.selectedTask];
            tasksUpdated = getTaskBasedOnExpiry(tasksUpdated)
            return { ...state, tasks: tasksUpdated, selectedTask: null }
        }
        case "RESETTASK": {
            return { ...state, selectedTask: null }
        }
        case "FILTERTASK": {
            return { ...state, selectedTask: null }
        }
        case "REORDERTASK": {
            let existingTasks = [...state.tasks];
            if (action.payload.type === "up") {
                existingTasks = moveTask(existingTasks, action.payload.index, action.payload.index - 1)
            } else {
                existingTasks = moveTask(existingTasks, action.payload.index, action.payload.index + 1)
            }

            return { ...state, tasks: existingTasks }
        }
        case "UPDATESTATUS": {
            let updatedTasks = state.tasks.map((item) => {
                let task = { ...item }
                if (item.id === action.payload.id) {
                    task["status"] = action.payload.value;
                    if (action.payload.value === "done") {
                        task.labelType = "success";
                    }
                }
                return task
            });
            updatedTasks = getTaskBasedOnExpiry(updatedTasks)
            return { ...state, tasks: updatedTasks }
        }
        default:
            return state
    }
}

function moveTask(tasks, from, to) {
    var f = tasks.splice(from, 1)[0];
    tasks.splice(to, 0, f);
    return tasks
}


function getTaskBasedOnExpiry(tasks) {
    let taskSortArray = ["danger", "warning", "default", "success"];

    let tasksUpdated = tasks.map((t) => {
        let task = { ...t };
        const result = differenceInHours(
            new Date(task.expires),
            new Date()
        )
        task.labelType = "default";
        if (task.status === "done") {
            task.labelType = "success";
        }
        if (result < 24 && task.status !== "done") {
            task.labelType = "warning";
        }
        if (result < 0 && task.status !== "done") {
            task.labelType = "danger";
        }
        return task
    })

    tasksUpdated = tasksUpdated.sort((a, b) => {
        return taskSortArray.indexOf(a.labelType) - taskSortArray.indexOf(b.labelType)
    })

    return tasksUpdated;
}