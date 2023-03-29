import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('Header component', () => {
  it('Header renders', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const header = getByTestId('header');
    expect(header).toBeInTheDocument();
  });
});
