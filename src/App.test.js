import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Baraka Safaris listing', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /baraka safaris/i })).toBeInTheDocument();
  expect(screen.getByText(/popular packages/i)).toBeInTheDocument();
});
