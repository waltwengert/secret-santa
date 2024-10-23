import { render, screen } from '@testing-library/react';

import App from './App';

it('renders learn react link', () => {
    render(<App>Test</App>);
    const linkElement = screen.getByText(/secret santa/i);
    expect(linkElement).toBeInTheDocument();
});
