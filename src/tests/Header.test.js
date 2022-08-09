import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('Counter should have a default value of 0', () => {
    render(<Header />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });