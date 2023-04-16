import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NFPage from './pages/nf/NFPage';
import AboutPage from './pages/about/AboutPage';
import FormPage from './pages/form/FormPage';
import Layout from './UI/layout/Layout';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchImages, setSearchValue } from './features/search';

export const App = () => {
  const { searchValue, sortBy, resultsPerPage, currentPage } = useAppSelector(
    (state) => state.search
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const localStorageValue = localStorage.getItem('searchValue');
    if (localStorageValue) {
      dispatch(setSearchValue(localStorageValue));
      dispatch(
        fetchImages({ searchValue: localStorageValue, sortBy, resultsPerPage, currentPage })
      );
    } else {
      dispatch(setSearchValue('cats'));
      dispatch(fetchImages({ searchValue: 'cats', sortBy, resultsPerPage, currentPage }));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchImages({ searchValue, sortBy, resultsPerPage, currentPage }));
  }, [sortBy, resultsPerPage, currentPage]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="form" element={<FormPage />} />
          <Route path="*" element={<NFPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
