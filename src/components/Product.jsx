 import styles from "./Product.module.css";
import { useNavigate } from "react-router"; // Importa o hook

export function Product({ product, addToCart }) {
  const navigate = useNavigate(); // Instancia o hook

  function handleAddToCart() {
    addToCart(product);
    navigate("/cart"); // Redireciona para o carrinho
  }

  return (
    <div key={product.id} className={styles.productCard}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.productImage}
      />
      <h2 className={styles.productTitle}>{product.title}</h2>
      <p className={styles.productDescription}>{product.description}</p>
      <p className={styles.productPrice}>${product.price}</p>
      <button onClick={handleAddToCart} className={styles.productButton}>
        ADD TO CART
      </button>
    </div>
  );
}
