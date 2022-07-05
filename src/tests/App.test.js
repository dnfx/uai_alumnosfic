import { render, screen } from '@testing-library/react';
import reportWebVitals from './reportWebVitals';
import "./styles/App.scss";

test('renders learn static link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
