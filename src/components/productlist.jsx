import { useState, useEffect } from "react";
import styles from "./productlist.module.css";
import { CircularProgress } from "@mui/material";

function Product({ img, title, description, price }) {
  return (
    <div className={styles.productCard}>
      <img src={img} alt={title} className={styles.productImage} />
      <h2 className={styles.productTitle}>{title}</h2>
      <p className={styles.productDescription}>{description}</p>
      <p className={styles.productPrice}>R$ {price.toFixed(2)}</p>
      <button className={styles.productBtn}>
        Adicionar ao carrinho
      </button>
    </div>
  );
}

export function ProductList() {
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

  return (
    <div className={styles.container}>
      <h1>TJA Megastore 🛒</h1>
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
        />
      ))}
    </div>
  );
}