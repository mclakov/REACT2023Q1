import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import FormPage from './FormPage';
import { store } from '../../store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('FormPage component', () => {
  it('should render user card', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <FormPage />
        </BrowserRouter>
      </Provider>
    );
    const firstNameInput = getByPlaceholderText('First name');
    const lastNameInput = getByPlaceholderText('Last name');
    const agreeInput = getByTestId('agree');
    const birthDateInput = getByTestId('birthDate');

    await userEvent.type(firstNameInput, 'name');
    await userEvent.type(lastNameInput, 'surname');
    await userEvent.type(birthDateInput, '2022-04-04');
    await userEvent.click(agreeInput);

    const btn = getByTestId('formSubmit');
    await userEvent.click(btn);

    const card = await screen.findByTestId('user-card');
    expect(card).toBeInTheDocument();
  });

  it('should show an error for empty input fields', async () => {
    const { getByTestId, getByPlaceholderText, findByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <FormPage />
        </BrowserRouter>
      </Provider>
    );
    const firstNameInput = getByPlaceholderText('First name');
    await userEvent.type(firstNameInput, 'name');

    const btn = getByTestId('formSubmit');
    await userEvent.click(btn);

    expect(await findByTestId('errorLastName')).toBeInTheDocument();
    expect(await findByTestId('errorBirthDate')).toBeInTheDocument();
    expect(await findByTestId('errorAgree')).toBeInTheDocument();
  });
});
