import { render, screen } from '@testing-library/react';
import TaskAction from './TaskAction';
import { TaskBoardContext } from './TaskBoard';
import {initialState} from "./reducer"

describe('Task Action', () => {
    test("render task action items", () => {
        render(<TaskBoardContext.Provider value={{state:initialState}}>
            <TaskAction />
        </TaskBoardContext.Provider>)
    })
});
