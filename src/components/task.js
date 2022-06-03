export const task = {
    id:null,
    name:"",
    status:"new",
    priority:"",
    expires:""
}

export const addTask = ()=>{
    return {
        type:"ADDTASK",
        payload:null
    }
}

export const updateTask = (value)=>{
    return {
        type:"UPDATETASK",
        payload:value
    }
}

export const saveTask = ()=>{
    return {
        type:"SAVETASK",
        payload:null
    }
}

export const resetTask = ()=>{
    return {
        type:"RESETTASK",
        payload:null
    }
}

export const updateStatus = (value)=>{
    return {
        type:"UPDATESTATUS",
        payload:value
    }
}

export const reorderTasks = (value)=>{
    return {
        type:"REORDERTASK",
        payload:value
    }
}