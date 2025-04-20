import React from 'react';
import logo from '../../assets/images/logo.svg'
import reactLogo from '../../assets/images/react.svg'
import css from './Header.module.css';

function Header() {
  return (
    <header>
      <div className="container">
        <div>
          <img className={css.logo} src={logo} alt="Logo" />
        </div>
        <div className="textRight">
          <img src={reactLogo} alt="React" className={css.reactLogo} />
          <strong>React</strong>
        </div>
      </div>
    </header>
  )
}

export default Header