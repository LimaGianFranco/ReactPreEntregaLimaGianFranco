import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import NavBar from "./components/Layout/NavBar";
import ItemListContainer from "./components/Item/ItemListContainer";
import ItemDetailContainer from "./components/Item/ItemDetailContainer";
import Menu from "./components/Menu";
import Promociones from "./components/Promociones";
import Contacto from "./components/Contacto";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

const App = () => {
  return (
    <CarritoProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/promociones" element={<Promociones />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} /> 
        </Routes>
      </Router>
    </CarritoProvider>
  );
};

export default App;
