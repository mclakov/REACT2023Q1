import React from 'react';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <a href="UI/footer/Footer" className={style.rsschool}></a>
        <span>2023</span>
      </div>
    </footer>
  );
};

export default Footer;
