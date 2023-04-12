import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './Layout.module.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <main className={style.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
