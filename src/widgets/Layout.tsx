import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import style from './Layout.module.scss';
import Header from './Header';
import Footer from './Footer';

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
