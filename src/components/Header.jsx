import { useState } from "react";
import { ShoppingBasket } from "lucide-react";
import styles from "./Header.module.css";
import { Link } from "react-router";
import logoImg from "./WBP MEGAstore.png";

export function Header({ cart, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    if (onSearch) onSearch(searchTerm);
  }

  // Soma total de itens
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.link}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img src={logoImg} alt="Logo WBP Megastore" className={styles.logoImg} />
          <h1>WBP Megastore</h1>
        </div>
      </Link>
      <form className={styles.searchForm} onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Pesquisar produtos..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>prequisar🔎</button>
      </form>
      <Link to="/cart" className={styles.link}>
        <div className={styles.cartInfo} style={{ position: "relative" }}>
          <ShoppingBasket size={32} />
          {totalItems > 0 && (
            <span className={styles.cartBadge}>{totalItems}</span>
          )}
          <p>
            no carrinho<br />
          </p>
        </div>
      </Link>
    </div>
  );
}