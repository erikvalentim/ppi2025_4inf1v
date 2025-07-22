import styles from "./Cart.module.css";
import { useNavigate } from "react-router";
import { useState } from "react";

export function Cart({ cart, setCart }) {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  function increaseQty(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  }

  function decreaseQty(id) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, (item.quantity || 1) - 1) }
            : item
        )
        .filter((item) => (item.quantity || 1) > 0)
    );
  }

  function removeAll() {
    setCart([]);
    setTotal(0);
  }

  function confirmCart() {
    const newTotal = cart.reduce((acc, item) => {
      const quantity = item.quantity || 1;
      const price = parseFloat(item.price || 0);
      return acc + quantity * price;
    }, 0);
    setTotal(newTotal);
  }

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.title}>Carrinho de Compras</h2>
      <button className={styles.removeAllBtn} onClick={removeAll}>
        Remover todos os itens
      </button>

      {cart.length === 0 ? (
        <p className={styles.empty}>Seu carrinho está vazio.</p>
      ) : (
        <div className={styles.productsList}>
          {cart.map((product) => (
            <div className={styles.productCard} key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className={styles.productImg}
              />
              <div className={styles.productInfo}>
                <h3>{product.title}</h3>
                <p className={styles.price}>Preço: R$ {parseFloat(product.price).toFixed(2)}</p>
                <div className={styles.qtyRow}>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => decreaseQty(product.id)}
                  >
                    −
                  </button>
                  <span className={styles.qty}>{product.quantity || 1}</span>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => increaseQty(product.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <>
          <button className={styles.confirmBtn} onClick={confirmCart}>
            Confirmar alterações
          </button>
          <p className={styles.total}>Total: R$ {total.toFixed(2)}</p>
        </>
      )}

      <button className={styles.backBtn} onClick={() => navigate("/")}>
        Voltar para página inicial
      </button>
    </div>
  );
}
