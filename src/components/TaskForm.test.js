import { render, screen } from '@testing-library/react';
import TaskForm from './TaskForm';
import { TaskBoardContext } from './TaskBoard';
import {initialState} from "./reducer"

describe('Task Form', () => {
    test("render task form component", () => {
        render(<TaskBoardContext.Provider value={{state:initialState}}>
            <TaskForm />
        </TaskBoardContext.Provider>)
    })
});
