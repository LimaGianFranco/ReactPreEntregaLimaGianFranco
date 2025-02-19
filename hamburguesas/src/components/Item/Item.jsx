import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img 
          src={`/images/${product.image}`} 
          className="card-img-top" 
          alt={product.name} 
          style={{ height: "200px", objectFit: "cover" }} 
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <h5>${product.price}</h5>

          <Link to={`/item/${product.id}`} className="btn btn-primary mt-auto">
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
