import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
