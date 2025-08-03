import "./styles/theme.css";
import "./styles/global.css";
import { ProductList } from "./components/ProductList";
import { Header } from "./components/Header";
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Cart } from "./components/Cart";
import { Register } from "./components/Register";
import { Login } from "./components/Login";

export default function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function onIncrease(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  }

  function onDecrease(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && (item.quantity || 1) > 1
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      )
    );
  }

  function onClear() {
    setCart([]);
  }

  function addToCart(product) {
    setCart((prevCart) => {
      const found = prevCart.find((item) => item.id === product.id);
      if (found) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  function onRemove(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  function handleSearch(term) {
    setSearchTerm(term);
  }

  return (
    <>
      <Header cart={cart} onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={<ProductList addToCart={addToCart} searchTerm={searchTerm} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onClear={onClear}
              onRemove={onRemove}
            />
          }
        />
      </Routes>
    </>
  );
}
