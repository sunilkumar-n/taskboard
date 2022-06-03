import { render, screen } from '@testing-library/react';
import BoardList from './BoardList';
import { TaskBoardContext } from './TaskBoard';
import {initialState} from "./reducer"

describe('Board list test', () => {
    test("render board list compoment", () => {
        render(<TaskBoardContext.Provider value={{state:initialState}}>
            <BoardList />
        </TaskBoardContext.Provider>)
    })
});
