import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import style from './Layout.module.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';

class Layout extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <Header />
        <main className={style.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
