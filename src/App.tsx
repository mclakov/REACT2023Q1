import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NFPage from './pages/NFPage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='*' element={<NFPage />} />
      </Routes>
    </div>
  );
}

export default App;
