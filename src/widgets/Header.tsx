import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <div >
          <nav >
            <ul >
              <li>
                <NavLink to="/" >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
