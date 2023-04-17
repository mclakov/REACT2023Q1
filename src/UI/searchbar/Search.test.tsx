import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

const change = jest.fn();

describe('Search component', () => {
  it('Search renders', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    render(
      <Provider store={store}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/*@ts-ignore*/}
        <SearchBar searchValue=" " onSearchBarChange={change} />
      </Provider>
    );
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
  });
});
