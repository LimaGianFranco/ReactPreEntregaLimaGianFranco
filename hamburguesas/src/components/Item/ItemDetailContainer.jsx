import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../mocks/products";  
import ItemDetail from "./ItemDetail"; 

const ItemDetailContainer = () => {
  const { itemId } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = Number(itemId); 

    if (isNaN(id)) {
      console.error("El ID del producto no es válido.");
      setLoading(false);
      return;
    }

    const fetchProduct = new Promise((resolve) => {
      setTimeout(() => {
        const foundProduct = products.find((p) => p.id === id);  
        resolve(foundProduct);
      }, 500);
    });

    fetchProduct.then((data) => {
      console.log("Producto encontrado:", data); 
      setProduct(data || null);
      setLoading(false);
    });
  }, [itemId]);

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (!product) {
    return <p>❌ Producto no encontrado</p>;
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-3">Detalle del Producto</h1>
      <ItemDetail product={product} /> 
    </div>
  );
};

export default ItemDetailContainer;
