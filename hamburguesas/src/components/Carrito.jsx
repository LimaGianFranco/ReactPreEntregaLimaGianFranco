import React from "react";
import { useCarrito } from "../context/CarritoContext";

const Carrito = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useCarrito();

  return (
    <div className="container mt-4">
      <h2>Tu carrito</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          <ul className="list-group">
            {carrito.map((producto) => (
              <li key={producto.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h3>{producto.name}</h3>
                  <p>Precio: ${producto.price}</p>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => eliminarDelCarrito(producto.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <h3 className="mt-3">Total: ${carrito.reduce((total, producto) => total + producto.price, 0)}</h3>
        </div>
      )}
      <button onClick={vaciarCarrito} className="btn btn-warning mt-3">
        Vaciar carrito
      </button>
    </div>
  );
};

export default Carrito;
