import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

afterEach(() => {
    cleanup();
})

test('renders app root div', () => {
    render(<App />);
    const appRootElement = screen.getByTestId("app-root");
    expect(appRootElement).toBeInTheDocument();
});

it('should take a snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
})