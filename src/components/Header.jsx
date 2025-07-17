import styles from "./Header.module.css";
import { TrendingUp } from "lucide-react";

export function Header({ cart }) {
  return (
    <header className={styles.header1}>
      <TrendingUp size={44} color="#0a9608" />
      <div className={styles.headerTitleArea}>
        <h1 className={styles.headerTitle}>TJA Megastore 🛒</h1>
      </div>
      <div className={styles.headerTotal}>
        {cart.length > 0 && <p>{cart.length} produtos</p>}
        <p>Total: R$ {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
      </div>
    </header>
  );
}
