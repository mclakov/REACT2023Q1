import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

const setValues = jest.fn();

describe('Form component', () => {
  it('Form renders', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Form setValues={setValues} />
      </Provider>
    );
    const form = getByTestId('form');
    expect(form).toBeInTheDocument();
  });
});
