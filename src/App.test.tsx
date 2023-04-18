import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import FormPage from './pages/form/FormPage';
import NFPage from './pages/nf/NFPage';
import App from './App';

test('render App elements', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByTestId('app')).toBeInTheDocument();
});

test('Router test about', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByTestId('about-page')).toBeInTheDocument();
});

test('Router test home', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByTestId('home-page')).toBeInTheDocument();
});

test('Router test form', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByTestId('form-page')).toBeInTheDocument();
});

test('Error page test', () => {
  render(
    <MemoryRouter initialEntries={['/aaassa']}>
      <NFPage />
    </MemoryRouter>
  );
  expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
});
