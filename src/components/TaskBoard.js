import React, { createContext, useReducer } from 'react';
import BoardList from './BoardList';
import { reducer, initialState } from "./reducer";
import { addList } from "./list";
export const TaskBoardContext = createContext();



export const TaskBoard = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (<TaskBoardContext.Provider value={{
        dispatch,
        state
    }}>
        <div className="row m-2">
            <div className="col-sm-8"><h1>Task Board </h1></div>
            <div className="col-sm-4 text-end">
                <div className="d-inline p-2">
                    <button type="button" className="btn btn-primary"
                        onClick={() => {
                            //restricting to only one list, mutiple list can be handled in next iteration
                            if (state.lists.length < 1)
                                dispatch(addList())
                        }}>Add List</button>
                </div>
            </div>
        </div>
        <BoardList />
    </TaskBoardContext.Provider>)
}