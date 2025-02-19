import React from "react";
import { useCarrito } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CarritoWidget = () => {
  const { carrito } = useCarrito();

  return (
    <div>
      <Link to="/carrito">
        <button>
          🛒 Carrito ({carrito.length})
        </button>
      </Link>
    </div>
  );
};

export default CarritoWidget;
