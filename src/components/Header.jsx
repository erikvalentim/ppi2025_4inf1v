import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ShoppingBasket } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../service/CartContext";
import logo from "./EHM.png";

export function Header() {
  const { cart } = useContext(CartContext);
  const totalQty = cart.reduce((sum, p) => sum + p.quantity, 0);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img
          src={logo}
          alt="Logo Mercado Livre"
          style={{
            height: "90px",
            width: "130px",
            verticalAlign: "middle",
            marginRight: "1rem",
            borderRadius: "8px",
            background: "#ffe600"
          }}
        />
        <span className={styles.logoText}>🛒</span>
      </Link>
      <div>
        <Link to="/cart" className={styles.cartBtn}>
          <ShoppingBasket size={32} />
          <span className={styles.cartCount}>{totalQty}</span>
        </Link>
        <p>
          Total $: {cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}
        </p>
      </div>
      <nav>
        <Link to="/register" className={styles.link}>Registro</Link>
        <Link to="/login" className={styles.link}>Login</Link>
        <Link to="/home" className={styles.link}>Home</Link>
      </nav>
    </header>
  );
}
