import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Header />
        <main>
          <Outlet />
        </main>
        <footer className='footer'>footer</footer>
      </div>
    );
  }
}

export default Layout;
