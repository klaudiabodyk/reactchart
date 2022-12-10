import { render, screen } from '@testing-library/react';
import LineChart from '../LineChart';


test('renders learn react link', () => {
  render(<LineChart />)
  const linkElement = screen.getByText(/wykres/i);
  expect(linkElement).toBeInTheDocument();
});
