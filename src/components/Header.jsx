import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { useAuth0 } from "@auth0/auth0-react";

const nav__links = [
  { path: "/#", display: "Home" },
  { path: "/aichat", display: "Ai-Assistant" },
  { path: "/newsfeed", display: "Health News" },
  { path: "/map", display: "Hospitals" },
  { path: "/records", display: "My Health Records" },
];

const Header = () => {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white shadow-md sticky__header font-questrial">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="mb-6 md:mb-0">
            <a href="/#" className="flex items-center">
              <img src={logo} className="h-12 me-2" alt="FlowBite Logo" />
              <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
                ElderWell
              </span>
            </a>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center ">
          {nav__links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-700 font-semibold font-medium hover:text-blue-600 transition ${
                  isActive ? "text-blue-600 border-b-2 border-blue-600 " : ""
                }`
              }
            >
              {link.display}
            </NavLink>
          ))}

          {isAuthenticated && (
            <span className="text-gray-600 font-boldtext-sm ">
              {" "}
              {user.name}
            </span>
          )}
          {isAuthenticated ? (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="bg-customPurple hover:bg-red-600 text-white px-4 py-1 rounded"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={loginWithRedirect}
              className="bg-customPurple hover:bg-blue-600 text-white px-4 py-1 rounded"
            >
              Log In
            </button>
          )}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <i className="ri-menu-line text-2xl text-gray-700"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-2 space-y-2">
          {nav__links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {link.display}
            </NavLink>
          ))}
          {isAuthenticated && (
            <p className="text-gray-600 text-sm">{user.name}</p>
          )}
          {isAuthenticated ? (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="bg-red-500  hover:bg-red-600 text-white w-full py-1 rounded"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={loginWithRedirect}
              className="bg-blue-500 hover:bg-blue-600 text-white w-full py-1 rounded"
            >
              Log In
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
