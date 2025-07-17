import { useState } from "react";
import "./styles/theme.css";
import "./styles/global.css";
// import { Main } from "./components/Main";
import { Header } from "./components/Header";
// import { Footer } from "./components/Footer";
// import { LuckyNumber } from "./components/LuckyNumber";
import { ProductList } from "./components/productlist";
export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header cart={cart} />
      {/* <Main /> */}
      {/* <Footer /> */}
      {/* <LuckyNumber /> */}
      <ProductList cart={cart} setCart={setCart} />
    </>
  );
}
