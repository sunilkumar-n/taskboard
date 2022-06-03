import { render, screen } from '@testing-library/react';
import TaskStatusLabel from './TaskStatusLabel';

describe('Tasks status Label', () => {
    test("renders tasks status lable", () => {
        render(<TaskStatusLabel />)
    })
});
