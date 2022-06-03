import { render, screen } from '@testing-library/react';
import TasksList from './TasksList';
import { TaskBoardContext } from './TaskBoard';
import {initialState} from "./reducer"

describe('Tasks List Component', () => {
    test("render tasks lists", () => {
        render(<TaskBoardContext.Provider value={{state:initialState}}>
            <TasksList />
        </TaskBoardContext.Provider>)
    })
});
