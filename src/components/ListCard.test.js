import { render, screen } from '@testing-library/react';
import ListCard from './ListCard';
import { TaskBoardContext } from './TaskBoard';
import {initialState} from "./reducer"

describe('List card', () => {
    test("render list card for each list", () => {
        render(<TaskBoardContext.Provider value={{state:initialState}}>
            <ListCard />
        </TaskBoardContext.Provider>)
    })
});
