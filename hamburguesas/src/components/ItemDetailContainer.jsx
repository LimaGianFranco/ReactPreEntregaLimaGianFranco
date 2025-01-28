import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../mocks/products";
import { useCarrito } from "../context/CarritoContext.jsx";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { agregarAlCarrito } = useCarrito(); 

  useEffect(() => {
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => resolve(products), 500);
    });

    fetchProducts.then((data) => {
      if (categoryId) {
        setFilteredProducts(data.filter((product) => product.category === categoryId));
      } else {
        setFilteredProducts(data);
      }
    });
  }, [categoryId]);

  const handleAgregarAlCarrito = (product) => {
    agregarAlCarrito(product);
  };

  return (
    <div>
      <h1>{categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}</h1>
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img 
                src={`/images/${product.image}`} 
                className="card-img-top" 
                alt={product.name} 
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <h5>${product.price}</h5>

                <button 
                  onClick={() => handleAgregarAlCarrito(product)} 
                  className="btn btn-success mt-2">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
