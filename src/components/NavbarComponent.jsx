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
          <li className="nav-item">
            <a className="signIn" href="#signIn">Sign In</a>
          </li>
          <li className="nav-item">
            <a className="signUp" href="#signUp">Sign Up</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
