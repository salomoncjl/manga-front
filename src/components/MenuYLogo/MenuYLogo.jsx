import React from 'react'
import './menuylogo.css'
import menu from '../../images/menu.png'
import logo from '../../images/LogoM.png'
import menuViolet from '../../images/MenuViolet.png'

export default function MenuYLogo() {
  return (
    <div className="menu-logo">
      <img src={menu} alt="menu" className="img-menu" />
      <img src={menuViolet} alt="icon-menu" className='img-menu-violet' />
      <img src={logo} alt="logo" className="img-logo" />
    </div>
  );
}
