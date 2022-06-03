import { useContext } from "react";
import { TaskBoardContext } from "./TaskBoard";
import Tasks from "./Tasks"
import { changeTitle, editMode, saveList } from "./list";


const ListCard = () => {
    const { state, dispatch } = useContext(TaskBoardContext)

    return (
        <div className="card">
            <div className="card-header">
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button"
                        onClick={(event) => {
                            if (event.target.innerText === "Edit")
                                dispatch(editMode())
                            else
                                dispatch(saveList({
                                    id: state.selectedList.id
                                }))

                        }}
                    >{state.isListTitleEditing ? "Save" : "Edit"}</button>
                    {state.isListTitleEditing && state.selectedList && <input type="text" className="form-control"
                        value={state.selectedList.title}
                        onChange={(event) => {
                            dispatch(changeTitle(event.target.value))
                        }}
                    />}
                    {
                        !state.isListTitleEditing && state.selectedList && <h5 className="card-title ms-2">{state.selectedList.title}</h5>
                    }
                </div>
            </div>
            <Tasks />
        </div>
    )
}

export default ListCard;