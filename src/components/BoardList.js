import React, { useContext } from "react"
import ListCard from "./ListCard"
import { TaskBoardContext } from "./TaskBoard"

const BoardList = ()=>{
    const {state} = useContext(TaskBoardContext)
    return (
        <div className="d-grid gap-3">
                {
            state.lists.map((list)=>{
                return (
                     <ListCard key={list.title}/>
                )
            })
        }
        </div>

    )
}

export default BoardList;
