import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import '@testing-library/jest-dom/extend-expect';

const change = jest.fn();

describe('Search component', () => {
  it('Search renders', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    render(<SearchBar searchValue="" onSearchBarChange={change} />);
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
  });
});
