import React from "react";
import { NavLink } from "react-router-dom";
import "./ActiveLink.css";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
