import React from 'react';
import '../style/navbar.css';

export const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a className="hanori_logo" href="#home"><img src='src/assets/navbar_logo.png' alt='logo'/></a> 
        </li>
        <div className="auth-buttons"> 
          <button className="sign-in">
            Sign In
          </button>
          <button className="sign-up">
            Sign Up
          </button>
        </div>
      </ul>
    </nav>
  );
}
