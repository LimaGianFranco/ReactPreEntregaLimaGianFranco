import React, { useState } from "react";

const ItemQuantitySelector = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
    onQuantityChange(quantity + 1);  
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      onQuantityChange(quantity - 1); 
    }
  };

  return (
    <div>
      <h5>Cantidad</h5>
      <div className="d-flex">
        <button onClick={handleDecrease} className="btn btn-outline-secondary">-</button>
        <span className="mx-2">{quantity}</span>
        <button onClick={handleIncrease} className="btn btn-outline-secondary">+</button>
      </div>
    </div>
  );
};

export default ItemQuantitySelector;
