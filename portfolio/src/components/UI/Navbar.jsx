import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Menu with correct class */}
        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <NavLink to="/"    onClick={() => setIsOpen(!isOpen)} className={({ isActive }) => isActive ? 'nav-item primary' : 'nav-item'}>H</NavLink>
          <NavLink to="/Blog"    onClick={() => setIsOpen(!isOpen)} className={({ isActive }) => isActive ? 'nav-item primary' : 'nav-item'}>Blog</NavLink>
          <NavLink to="/Work"    onClick={() => setIsOpen(!isOpen)} className={({ isActive }) => isActive ? 'nav-item primary' : 'nav-item'}>Works</NavLink>
          <NavLink to="/Contact" onClick={() => setIsOpen(!isOpen)} className={({ isActive }) => isActive ? 'nav-item primary' : 'nav-item'}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
