import React from "react";
import { useCarrito } from "../../context/CarritoContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { carrito, agregarAlCarrito, eliminarDelCarrito, totalUnidades, totalPrecio, vaciarCarrito } = useCarrito();
  const navigate = useNavigate();

  if (carrito.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>🛒 Tu carrito está vacío</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Ir al catálogo
        </Link>
      </div>
    );
  }

  const reducirCantidad = (producto) => {
    if (producto.cantidad > 1) {
      agregarAlCarrito({ ...producto, cantidad: -1 });
    } else {
      eliminarDelCarrito(producto.id);
    }
  };

  const handleFinalizarCompra = () => {
    navigate("/checkout");
  };

  return (
    <div className="container mt-4">
      <h2>🛍️ Carrito de compras</h2>
      <div className="card p-3">
        {carrito.map((producto) => (
          <div key={producto.id} className="d-flex justify-content-between align-items-center border-bottom py-2">
            <div>
              <strong>{producto.name}</strong> <br />
              <span>${producto.price} x {producto.cantidad} = ${producto.price * producto.cantidad}</span>
            </div>
            <div>
              <button className="btn btn-sm btn-danger mx-1" onClick={() => reducirCantidad(producto)}>
                -
              </button>
              <span className="mx-2">{producto.cantidad}</span>
              <button className="btn btn-sm btn-success mx-1" onClick={() => agregarAlCarrito({ ...producto, cantidad: 1 })}>
                +
              </button>
            </div>
          </div>
        ))}
        <hr />
        <h5>Total de productos: {totalUnidades()}</h5>
        <h5>Total a pagar: ${totalPrecio().toFixed(2)}</h5>
      </div>

      <div className="mt-3">
        <button className="btn btn-danger" onClick={vaciarCarrito}>
          Vaciar carrito
        </button>
        <button className="btn btn-success mx-2" onClick={handleFinalizarCompra}>
          Finalizar compra
        </button>
      </div>
    </div>
  );
};

export default Cart;
