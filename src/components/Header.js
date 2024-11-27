import React from "react";
import './Header.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light header-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="/logo.png"
            className="logo"
            alt="Logo"
          />
        </a>
        <button className="btn carrinho-btn" type="button">
          <span className="btn-text">Ver carrinho 🛒</span>
        </button>
      </div>
    </nav>
  );
}

export default Header;


