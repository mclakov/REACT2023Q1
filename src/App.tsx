import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NFPage from './pages/nf/NFPage';
import AboutPage from './pages/about/AboutPage';
import FormPage from './pages/form/FormPage';
import ImageDetail from './pages/imageDetail/ImageDetail';
import Layout from './UI/layout/Layout';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks';
import { setSearchValue } from './features/search';
import { fetchImages } from './features/thunks';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchImages({ searchValue, sortBy, resultsPerPage, currentPage }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy, resultsPerPage, currentPage]);

  return (
    <div className="App" data-testid="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="form" element={<FormPage />} />
          <Route path="images/:currentImageId" element={<ImageDetail />} />
          <Route path="*" element={<NFPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
