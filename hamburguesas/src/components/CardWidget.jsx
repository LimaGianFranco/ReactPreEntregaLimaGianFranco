import React from 'react';

const CartWidget = () => {
  const itemsInCart = 3;  

  return (
    <button className="btn btn-outline-light">
      <i className="fas fa-shopping-cart"></i> 
      <span className="badge bg-danger">{itemsInCart}</span>
    </button>
  );
};

export default CartWidget;
