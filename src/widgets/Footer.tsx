import React, { Component } from 'react';
import style from './Footer.module.scss';

class Footer extends Component {
  render() {
    return (
      <footer className={style.footer}>
        <div className={style.footerContainer}>
          <a href="https://rs.school/js/" className={style.rsschool}></a>
          <span>2023</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
