import React from 'react';
import './Navbar.css';
import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";

const NavBar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
        <header className="bg-navbar d-flex align-items-center justify-content-center p-0">
          <div><img className="logo-img" src="/img/logo shiwu.png" /></div>
            <nav ref={navRef}>
              <a href="">Inicio</a>
              <a href="">Contacto</a>
              <a href="">Catalogo</a>
              <a href="">Unirse</a>
              <div className="btn btn-outline-warning text-warning p-2 text-dark"onClick={showNavBar}>
                  <FaTimes/>
              </div>
            </nav>
          <button className="btn btn-outline-warning text-dark"onClick={showNavBar}>
            <FaBars/>
          </button>
        </header>
    
  )
}

export default NavBar