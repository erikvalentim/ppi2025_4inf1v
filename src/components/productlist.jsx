import { useState, useEffect } from "react";
import styles from "./productlist.module.css";
import { CircularProgress } from "@mui/material";

function Product({ img, title, description, price, onAdd }) {
  const [showQty, setShowQty] = useState(false);
  const [qty, setQty] = useState(1);

  function handleAddClick() {
    setShowQty(true);
  }

  function handleIncrease() {
    setQty(qty + 1);
  }

  function handleDecrease() {
    if (qty > 1) {
      setQty(qty - 1);
    } else {
      setShowQty(false);
      setQty(1);
    }
  }

  function handleConfirm() {
    onAdd(qty);
    setShowQty(false);
    setQty(1);
  }

  return (
    <div className={styles.productCard}>
      <img src={img} alt={title} className={styles.productImage} />
      <h2 className={styles.productTitle}>{title}</h2>
      <p className={styles.productDescription}>{description}</p>
      <p className={styles.productPrice}>R$ {price.toFixed(2)}</p>
      {!showQty ? (
        <button className={styles.productBtn} onClick={handleAddClick}>
          Adicionar ao carrinho
        </button>
      ) : (
        <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <button onClick={handleDecrease} style={{ marginRight: "1rem" }}>
            -
          </button>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              minWidth: "2rem",
              textAlign: "center",
              color: "#000" // <-- cor preta
            }}
          >
            {qty}
          </span>
          <button onClick={handleIncrease} style={{ marginLeft: "1rem" }}>
            +
          </button>
          <button
            className={styles.productBtn}
            style={{ marginLeft: "2rem" }}
            onClick={handleConfirm}
          >
            Confirmar
          </button>
        </div>
      )}
    </div>
  );
}

export function ProductList({ cart, setCart }) {
  var category = "smartphones";
  var limit = 10;
  var apiUrl = `https://dummyjson.com/products/category/${category}?limit=${limit}&select=id,thumbnail,brand,title,price,description`;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  function handleAddToCart(product, qty) {
    const items = Array(qty).fill(product);
    setCart([...cart, ...items]);
  }

  return (
    <div>
      <div className={styles.container}>
        {loading && (
          <div>
            <CircularProgress
              thickness={5}
              style={{ margin: "2rem auto", display: "block" }}
              sx={{ color: "#001111" }}
            />
            <p>Loading products...</p>
          </div>
        )}
        {error && <p>Error loading products: {error} ❌</p>}
        {products.map((product) => (
          <Product
            key={product.id}
            img={product.thumbnail}
            title={product.title}
            description={product.description}
            price={product.price}
            onAdd={(qty) => handleAddToCart(product, qty)}
          />
        ))}
      </div>
    </div>
  );
}