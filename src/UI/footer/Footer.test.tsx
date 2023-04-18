import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

describe('Footer component', () => {
  it('Footer renders', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const header = getByTestId('footer');
    expect(header).toBeInTheDocument();
  });
});
