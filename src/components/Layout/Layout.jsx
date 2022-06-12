import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import "./Layout.css";

import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import Logo from "../../assets/img/logo.png";
import Footer from "../Footer/Footer";

export default function Layout() {
  const [burMenu, setBurMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  const mobileMenu = () => setBurMenu(!burMenu);

  

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth);

    return () => { window.removeEventListener('resize', changeWidth)}
  }, [])



  return (
    <>
      <header className="Header">
        <NavLink to="/" className="Logotype">
          <img src={Logo} alt="Logo" />
          <span>Golocen Soil</span>
        </NavLink>

       <nav >
         {(burMenu || screenWidth > 480) &&(
          <div className="Navigation" id='navigation'>
          <NavLink className="NavigationLink" to="/" onClick={mobileMenu}>
            Головна
          </NavLink>
          <NavLink className="NavigationLink" to="/Table" onClick={mobileMenu}>
            Таблиця
          </NavLink>
          <NavLink className="NavigationLink" to="/Map" onClick={mobileMenu}>
            Карта
          </NavLink>
        </div>  
         )}
         
        
       </nav>
        
        <div className="MobMenuIcon">
          {!burMenu ? <FaBars className="Menu" onClick={mobileMenu} />: <GrClose onClick={mobileMenu}/>}
         
        </div>
      </header>
      <main className="mainContainer">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}
