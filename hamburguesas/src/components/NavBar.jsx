import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartWidget from './CardWidget';  

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Burger Heaven</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/menu">Menú</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/promociones">Promociones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacto">Contacto</a>
            </li>
          </ul>
        </div>

        {/* Icono del carrito de compras */}
        <button className="btn btn-outline-light">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="badge bg-danger">3</span> {/* Número fijo de artículos */}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
