import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NFPage from './pages/NFPage';
import AboutPage from './pages/AboutPage';
import FormPage from './pages/FormPage';
import Layout from './widgets/Layout';
import './App.css';

function App() {
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
}

export default App;
