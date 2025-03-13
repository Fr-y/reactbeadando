import React from 'react';
import { NavLink } from 'react-router';


export default function Navbar() {
  return (
    <header>
      <NavLink
        to="/Blog" className={({ isActive }) =>
          `${isActive ? 'primary' : ''}`}>
        Blog
      </NavLink>

      <NavLink
        to="/Work" className={({ isActive }) =>
          `${isActive ? 'primary' : ''}`}>
        Works
      </NavLink>

      <NavLink
        to="/Contact" className={({ isActive }) =>
          `${isActive ? 'primary' : ''}`}>
        Contact
      </NavLink>
    </header>
  )
}