import { render, screen } from '@testing-library/react';
import Tasks from './Tasks';
import { TaskBoardContext } from './TaskBoard';
import {initialState} from "./reducer"

describe('Tasks Component', () => {
    test("render tasks component", () => {
        render(<TaskBoardContext.Provider value={{state:initialState}}>
            <Tasks />
        </TaskBoardContext.Provider>)
    })
});
