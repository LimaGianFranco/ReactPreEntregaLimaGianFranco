import React from "react";
import { useCarrito } from "../context/CarritoContext";

const Carrito = () => {
  const { carrito, eliminarDelCarrito, calcularTotal } = useCarrito();

  return (
    <div className="cart">
      <h2>Tu Carrito</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en tu carrito.</p>
      ) : (
        <ul>
          {carrito.map((item) => (
            <li key={item.id}>
              <span>{item.nombre}</span>
              <span> x {item.cantidad}</span>
              <span> = ${item.precio * item.cantidad}</span>
              <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${calcularTotal()}</h3>
    </div>
  );
};

export default Carrito;
