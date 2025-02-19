import React from "react";
import { useCarrito } from "../../context/CarritoContext";

const AddItemButton = ({ product, quantity }) => {
  const { agregarAlCarrito } = useCarrito();

  const handleAddToCart = () => {
    const productToAdd = { ...product, quantity }; 
    agregarAlCarrito(productToAdd);
  };

  return (
    <button 
      onClick={handleAddToCart} 
      className="btn btn-success btn-lg mt-3 w-100 shadow"
    >
      Añadir al carrito
    </button>
  );
};

export default AddItemButton;
