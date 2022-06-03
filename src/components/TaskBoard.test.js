import { render, screen } from '@testing-library/react';
import {TaskBoard, TaskBoardContext} from './TaskBoard';
import {initialState} from "./reducer"

describe('Task board', () => {
    test("render task board component", () => {
        render(<TaskBoardContext.Provider value={{state:initialState}}>
            <TaskBoard />
        </TaskBoardContext.Provider>)
    })
});
