import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../mocks/products";
import Item from "./Item";
import { useCarrito } from "../context/CarritoContext.jsx"; 

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { carrito, agregarAlCarrito } = useCarrito(); 

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

      <div className="product-list" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ flex: "1 1 21%", boxSizing: "border-box" }}>
            <Item product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
