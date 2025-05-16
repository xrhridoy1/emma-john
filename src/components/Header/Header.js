import React from "react";
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="" />
      <div className="nav-section">
        <nav className="nav-bar">
          <a href="/shop">Shop</a>
          <a href="/review">Order Review</a>
          <a href="/manage">Manage Inventor</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;