import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';

test('Router test about', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByTestId('about-page')).toBeInTheDocument();
});

test('Router test home', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByTestId('home-page')).toBeInTheDocument();
});

test('Router test form', () => {
  render(
    <MemoryRouter initialEntries={['/form']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByTestId('form-page')).toBeInTheDocument();
});

test('Error page test', () => {
  render(
    <MemoryRouter initialEntries={['/aaassa']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
});
