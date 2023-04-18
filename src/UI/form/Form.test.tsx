import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { BrowserRouter } from 'react-router-dom';

const setValues = jest.fn();

describe('Form component', () => {
  it('Form renders', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Form setValues={setValues} />
        </BrowserRouter>
      </Provider>
    );
    const form = getByTestId('form');
    expect(form).toBeInTheDocument();
  });
});
