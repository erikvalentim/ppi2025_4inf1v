import { useNavigate } from "react-router";
import { useState } from "react";
import styles from "./Cart.module.css";

export function Cart({ cart, onIncrease, onDecrease, onClear, onRemove }) {
  // Soma total de itens
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  // Soma total do valor
  const totalPrice = cart.reduce(
    (sum, item) => sum + (item.price * (item.quantity || 1)),
    0
  );

  return (
    <div className={styles.cartContainer}>
      <header className={styles.header}>
        <h2 className={styles.title}>Shopping Cart</h2>
      </header>

      <section className={styles.cartListSection}>
        <ul className={styles.cartList}>
          {cart.map((product, index) => (
            <li key={index} className={styles.cartItem}>
              <div className={styles.productImageWrapper}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className={styles.productImage}
                />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.title}</h3>
                <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
                <div className={styles.quantityControl}>
                  <button
                    className={styles.quantityButton}
                    onClick={() => onDecrease(product.id)}
                  >
                    –
                  </button>
                  <span className={styles.quantity}>{product.quantity}</span>
                  <button
                    className={styles.quantityButton}
                    onClick={() => onIncrease(product.id)}
                  >
                    +
                  </button>
                  <button
                    className={styles.removeButton}
                    onClick={() => onRemove(product.id)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.summarySection}>
        <div className={styles.summary}>
          <span className={styles.summaryLabel}>Total de itens:</span>
          <span className={styles.summaryValue}>{totalItems}</span>
        </div>
        <div className={styles.summary}>
          <span className={styles.summaryLabel}>Valor total:</span>
          <span className={styles.summaryValue}>${totalPrice.toFixed(2)}</span>
        </div>
      </section>

      <footer className={styles.footer}>
        <button className={styles.clearButton} onClick={onClear}>
          Remover todos os itens
        </button>
      </footer>
    </div>
  );
}
