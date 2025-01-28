import React from "react";
import { useCarrito } from "../context/CarritoContext"; 

const Promociones = () => {
  const promociones = [
    { id: 1, name: "Combo Clásico", description: "Burger + bebida + papas", price: 15 },
    { id: 2, name: "2x1 Veganas", description: "Llévate dos hamburguesas veganas por el precio de una", price: 20 },
  ];

  const { carrito, agregarAlCarrito } = useCarrito();

  const handleAgregarAlCarrito = (promo) => {
    agregarAlCarrito(promo); 
  };

  return (
    <div className="container">
      <h1>Promociones</h1>
      <div className="row">
        {promociones.map((promo) => (
          <div key={promo.id} className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{promo.name}</h5>
                <p className="card-text">{promo.description}</p>
                <p className="card-text"><strong>${promo.price}</strong></p>
                <button
                  className="btn btn-success"
                  onClick={() => handleAgregarAlCarrito(promo)} 
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promociones;
