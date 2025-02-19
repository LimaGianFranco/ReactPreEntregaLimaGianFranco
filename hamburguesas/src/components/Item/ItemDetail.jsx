import React, { useState, useEffect } from "react";
import { useCarrito } from "../../context/CarritoContext";

const ItemDetail = ({ product }) => {
  console.log("Producto recibido en ItemDetail:", product);
  const { agregarAlCarrito } = useCarrito();
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    if (!product) {
      console.error("El producto no se ha proporcionado correctamente");
    }
  }, [product]);

  const aumentarCantidad = () => setCantidad(cantidad + 1);
  const disminuirCantidad = () => setCantidad(cantidad > 1 ? cantidad - 1 : 1);

  const handleAgregarAlCarrito = () => {
    if (!product || !product.name || !product.price) {
      alert("Producto no válido");
      return;
    }
    const productWithQuantity = { ...product, cantidad };
    agregarAlCarrito(productWithQuantity);
  };

  if (!product) {
    return <div>Producto no disponible</div>;
  }

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={`/images/${product.image}`}
            alt={product.name}
            className="img-fluid rounded shadow-lg"
          />
        </div>

        <div className="col-md-6">
          <h2 className="text-center">{product.name}</h2>
          <p className="text-center text-muted">Precio: ${product.price}</p>

          <div className="d-flex justify-content-center my-3">
            <button
              onClick={disminuirCantidad}
              className="btn btn-danger mx-2"
              disabled={cantidad === 1}
            >
              -
            </button>
            <span className="cantidad fs-4">{cantidad}</span>
            <button
              onClick={aumentarCantidad}
              className="btn btn-success mx-2"
            >
              +
            </button>
          </div>

      
          <div className="text-center">
            <button
              onClick={handleAgregarAlCarrito}
              className="btn btn-primary btn-lg w-100"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
