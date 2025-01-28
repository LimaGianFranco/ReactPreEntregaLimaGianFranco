import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCarrito } from "../context/CarritoContext"; 

const NavBar = () => {
  const { carrito } = useCarrito();  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-warning fw-bold display-4 burger-name" to="/">
          Burger Heaven
        </Link>
        
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
              <Link className="nav-link" to="/menu">Menú</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/promociones">Promociones</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link> 
            </li>
          </ul>
        </div>
        <Link to="/cart" className="btn btn-outline-light">
          <FontAwesomeIcon icon={faShoppingCart} />
          {carrito.length > 0 && <span className="badge bg-danger">{carrito.length}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
