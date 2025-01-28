import React from "react";
import { useCarrito } from "../context/CarritoContext";

const Cart = () => {
  const { carrito, eliminarDelCarrito } = useCarrito();

  return (
    <div className="container mt-4">
      <h1>Tu carrito</h1>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <ul className="list-group">
            {carrito.map((product) => (
              <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>{product.name}</h5>
                  <p>${product.price}</p>
                </div>
                <button 
                  className="btn btn-danger" 
                  onClick={() => eliminarDelCarrito(product.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <h3 className="mt-3">Total: ${carrito.reduce((total, product) => total + product.price, 0)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
