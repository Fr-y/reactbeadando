import React from 'react';
import { NavLink } from 'react-router';


export default function Navbar() {
  return (
    <header>
      <NavLink
        to="/Blog" className={({ isActive }) =>
          `${isActive ? 'activelink' : ''}`}>
        Blog
      </NavLink>

      <NavLink
        to="/Work" className={({ isActive }) =>
          `${isActive ? 'activelink' : ''}`}>
        Works
      </NavLink>

      <NavLink
        to="/Contact" className={({ isActive }) =>
          `${isActive ? 'activelink' : ''}`}>
        Contact
      </NavLink>
    </header>
  )
}