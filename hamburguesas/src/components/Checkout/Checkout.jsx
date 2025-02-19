import React, { useState } from "react";
import { useCarrito } from "../../context/CarritoContext";

const Checkout = () => {
  const { carrito, totalUnidades, totalPrecio, vaciarCarrito } = useCarrito();
  const [comprador, setComprador] = useState({ nombre: "", apellido: "", documento: "" });
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  const handleInputChange = (e) => {
    setComprador({ ...comprador, [e.target.name]: e.target.value });
  };

  const handleFinalizarCompra = () => {
    if (!comprador.nombre.trim() || !comprador.apellido.trim() || !comprador.documento.trim()) {
      alert("⚠️ Por favor, completa todos los campos.");
      return;
    }

    alert(`🎉 ¡Gracias por tu compra, ${comprador.nombre}!`);
    vaciarCarrito();
    setCompraFinalizada(true);
  };

  if (compraFinalizada) {
    return (
      <div className="container mt-5 text-center">
        <h2>✅ Compra realizada con éxito</h2>
        <p>Gracias por tu compra, {comprador.nombre}.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>🛒 Checkout</h2>

      {carrito.length === 0 ? (
        <p>⚠️ El carrito está vacío.</p>
      ) : (
        <>
          <div className="card p-3">
            <h4>📦 Resumen del pedido</h4>
            {carrito.map((producto) => (
              <div key={producto.id} className="d-flex justify-content-between">
                <span>
                  {producto.name} x {producto.cantidad}
                </span>
                <span>${(producto.price || 0) * (producto.cantidad || 1)}</span>
              </div>
            ))}
            <hr />
            <h5>🛍️ Total de productos: {totalUnidades()}</h5>
            <h5>💰 Total a pagar: ${totalPrecio().toFixed(2)}</h5>
          </div>

          <div className="card p-3 mt-3">
            <h4>📝 Datos del comprador</h4>
            <input
              type="text"
              name="nombre"
              className="form-control mb-2"
              placeholder="Nombre"
              value={comprador.nombre}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="apellido"
              className="form-control mb-2"
              placeholder="Apellido"
              value={comprador.apellido}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="documento"
              className="form-control mb-2"
              placeholder="Últimos números del documento"
              value={comprador.documento}
              onChange={handleInputChange}
            />
            <button onClick={handleFinalizarCompra} className="btn btn-success mt-2">
              ✅ Finalizar compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
