import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import LoginIcon from '@mui/icons-material/Login';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Logo from '../../assets/img/logo.png';
import Footer from '../Footer/Footer';

import { useSelector } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import { authSelectors } from '../../redux/auth';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import FlagUa from '../../assets/Icon/Flag_UA.svg';
import FlagEn from '../../assets/Icon/Flag_UK.svg';
import './Layout.css';

export default function Layout() {
  const dispatch = useDispatch();
  const [burMenu, setBurMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const { t, i18n } = useTranslation();

  const mobileMenu = () => setBurMenu(!burMenu);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  const LogOut = () => {
    dispatch(authOperations.logout());
  };

  const handelChangeLng = lng => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
  };

  return (
    <>
      <header className="Header">
        <NavLink to="/" className="Logotype">
          <img src={Logo} alt="Logo" />
          <span>Holocen Soil</span>
        </NavLink>

        <nav>
          {(burMenu || screenWidth > 480) && (
            <div className="Navigation" id="navigation">
              <NavLink className="NavigationLink" to="/" onClick={mobileMenu}>
                {t('layout.main')}
              </NavLink>
              <NavLink
                className="NavigationLink"
                to="/table"
                onClick={mobileMenu}
              >
                {t('layout.table')}
              </NavLink>
              <NavLink
                className="NavigationLink"
                to="/map"
                onClick={mobileMenu}
              >
                {t('layout.map')}
              </NavLink>
              <NavLink
                className="NavigationLink"
                to="/login"
                onClick={mobileMenu}
                style={
                  !isLoggedIn ? { display: 'inline' } : { display: 'none' }
                }
              >
                <LoginIcon />
              </NavLink>
              <NavLink
                className="NavigationLink"
                to="/add"
                onClick={mobileMenu}
                style={isLoggedIn ? { display: 'inline' } : { display: 'none' }}
              >
                <AddCircleOutlineRoundedIcon />
              </NavLink>

              <button
                onClick={LogOut}
                style={isLoggedIn ? { display: 'inline' } : { display: 'none' }}
              >
                <LogoutRoundedIcon />
              </button>
            </div>
          )}
        </nav>
        <div>
          <button onClick={() => handelChangeLng('ua')}>
            <img src={FlagUa} alt="flag of Ukraine" className="Flag" />
          </button>
          <button onClick={() => handelChangeLng('en')}>
            <img src={FlagEn} alt="flag of the UK" className="Flag" />
          </button>
        </div>
        <div className="MobMenuIcon">
          {!burMenu ? (
            <FaBars className="Menu" onClick={mobileMenu} />
          ) : (
            <GrClose onClick={mobileMenu} />
          )}
        </div>
      </header>
      <main className="mainContainer">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
