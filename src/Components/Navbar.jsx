import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-links">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Hem
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Om appen
      </NavLink>
    </nav>
  );
};

export default Navbar;
