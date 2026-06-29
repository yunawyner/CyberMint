// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CyberMint title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CyberMint/i);
    expect(titleElement).toBeInTheDocument();
});
