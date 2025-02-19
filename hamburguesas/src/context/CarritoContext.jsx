import React, { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find((item) => item.id === producto.id);
    if (productoExistente) {
      const nuevoCarrito = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + producto.cantidad }
          : item
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const eliminarDelCarrito = (productoId) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== productoId));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const totalUnidades = () => {
    return carrito.reduce((total, item) => total + item.cantidad, 0);
  };

  const totalPrecio = () => {
    return carrito.reduce((total, item) => {
      const precio = item.price || 0; 
      const cantidad = item.cantidad || 0; 
      return total + (precio * cantidad); 
    }, 0);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
        totalUnidades,
        totalPrecio,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => useContext(CarritoContext);
