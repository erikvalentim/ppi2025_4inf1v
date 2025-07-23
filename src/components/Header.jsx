import { ShoppingBasket } from "lucide-react";
import styles from "./Header.module.css";
import { Link } from "react-router";

export function Header({ cart }) {
  // Soma total de itens
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  // Soma total do valor
  const totalPrice = cart.reduce((total, product) => total + (product.price * (product.quantity || 1)), 0);

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.link}><h1>WBP Megastore</h1></Link>
      <Link to="/cart" className={styles.link}>
        <div className={styles.cartInfo}>
          <ShoppingBasket size={32} />
          <p>
            {totalItems} {totalItems === 1 ? "" : ""} no carrinho<br />
          </p>
        </div>
      </Link>
    </div>
  );
}