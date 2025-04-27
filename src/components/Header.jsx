import React, { useEffect, useRef, useContext, useState } from "react";
import "../styles/header.css";
// import logo from "../assets/img/Health___Fitness.png";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";



const nav__links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/aichat",
    display: "AI Chat",
  },
  {
    path: "/newsfeed",
    display: "News Feed",
  },
  {
    path: "/map",
    display: "map",
  },
];

const Header = () => {
  // const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const headerRef = useRef(null);
  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const handleLogOut = () => {
    logout({ logoutParams: { returnTo: window.location.origin } })  ;
  };

  const handleLogIn = () => {
    loginWithRedirect();
  };
  return (
    <header className="header" ref={headerRef}>
      <div className="container">
      </div>
        <div className="nav__wrapper">
          <div className="logo">
            <div className="logo__img">{/* <img src={logo} alt="" /> */}</div>
            <h2>Health & Fitness</h2>
          </div>
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item) => (
                <NavLink className="nav__item" key={item.path} to={item.path}>
                  {item.display}
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="auth-section">

          <div className="nav__right">
            {isAuthenticated && <p className="nav__item"> {user.name} </p>}
            {isAuthenticated ? (
              <button className="register__btn" onClick={handleLogOut}>
                Log Out
              </button>
            ) : (
              <button className="register__btn" onClick={handleLogIn}>
                Log In
              </button>
            )}
            <span className="mobile__menu">
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
