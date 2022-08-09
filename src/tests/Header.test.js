import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('Header should have correct title', () => {
    render(<Header />);
    const text = screen.getByText("Shoes Mcgee's Store");
    expect(text).toBeInTheDocument();
  });

test('Cart item counter should have a default value of 0', () => {
    render(<Header cartCount={0}/>);
    const count = screen.getByText(0);
    expect(count).toBeInTheDocument();
  });