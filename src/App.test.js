import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('App should display fetched user name', async () => {
  render(<App />);
  const userName = await waitFor(() => screen.getByText('Alissa'))
  expect(userName).toBeInTheDocument();
});
