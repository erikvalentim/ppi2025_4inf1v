import { ShoppingBasket } from "lucide-react";
import styles from "./Header.module.css";
import { Link } from "react-router";

export function Header({ cart }) {
  return (
    <header className={styles.header}>
      <div className={styles.logoRow} style={{ flexDirection: "column" }}>
        <img
          src="/WBP MEGAstore.png"
          alt="Logo WBP"
          className={styles.logoImg}
          style={{ marginBottom: "0.5rem" }}
        />
        <span className={styles.logoText}>WBP Mega Store</span>
      </div>
      <Link to="/cart" className={styles.link}>
        <div className={styles.cartInfo}>
          <ShoppingBasket size={32} />
          <p>
            {cart.length > 0 ? `Carrinho (${cart.length})` : "Carrinho vazio"}
          </p>
        </div>
      </Link>
    </header>
  );
}
