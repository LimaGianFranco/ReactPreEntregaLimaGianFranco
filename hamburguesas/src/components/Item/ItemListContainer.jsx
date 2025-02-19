import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../mocks/products";
import Item from "./Item";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

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

  return (
    <div>
      <h1>{categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}</h1>

      <div className="row">
        {filteredProducts.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
