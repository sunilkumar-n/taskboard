export const list = {
    id:null,
    title:""
}

export const addList = ()=>{
    return {
        type:"ADDLIST",
        payload:null
    }
}

export const editMode = (value)=>{
    return {
        type:"EDITMODE",
        payload:null
    }
}

export const changeTitle = (value)=>{
    return {
        type:"TITLEEDIT",
        payload:value
    }
}

export const saveList = (value)=>{
    return {
        type:"SAVELIST",
        payload:value
    }
}