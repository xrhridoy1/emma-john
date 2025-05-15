import logo from '../../images/Logo.svg'
import React from "react";
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="" />
    </div>
  )
}
export default Header;