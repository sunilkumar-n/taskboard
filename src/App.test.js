import { render, screen } from '@testing-library/react';
import App from './App';

test('renders task board component', () => {
  render(<App />);
  const h1Element = screen.getByText(/task board/i);
  expect(h1Element).toBeInTheDocument();
});
