import { useEffect, useState } from "react";
import { Product } from "./Product";
import { CircularProgress } from "@mui/material";
import styles from "./ProductList.module.css";

export function ProductList({ addToCart, searchTerm }) {
  var category = "smartphones";
  var limit = 10;
  var apiUrl = `https://dummyjson.com/products/category/${category}?limit=${limit}&select=id,thumbnail,title,price,description`;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ id: null, title: "", price: "", description: "" });

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Filtra produtos pelo termo de pesquisa
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes((searchTerm || "").toLowerCase())
  );

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.id === null) {
      setProducts([...products, { ...form, id: Date.now(), price: parseFloat(form.price) }]);
    } else {
      setProducts(products.map(p => p.id === form.id ? { ...form, price: parseFloat(form.price) } : p));
    }
    setForm({ id: null, title: "", price: "", description: "" });
  }

  function handleEdit(product) {
    setForm(product);
  }

  function handleRemove(id) {
    setProducts(products.filter(p => p.id !== id));
  }

  return (
    <div className={styles.container}>
      <h2>Produtos</h2>
      <div className={styles.productList}>
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      {loading && (
        <div>
          <CircularProgress thickness={5} sx={{ color: "#001111" }} />
          <p>Loading products...</p>
        </div>
      )}
      {error && <p>Error loading products: {error.message} ❌</p>}

      <div className={styles.actionsRow}>
        {/* Coluna esquerda: Adicionar produto */}
        <div className={styles.addColumn}>
          <h3>Adicionar Produto</h3>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              name="title"
              placeholder="Nome do produto"
              value={form.title}
              onChange={handleChange}
              required
            />
            <input
              name="price"
              type="number"
              placeholder="Preço"
              value={form.price}
              onChange={handleChange}
              required
            />
            <input
              name="description"
              placeholder="Descrição"
              value={form.description}
              onChange={handleChange}
            />
            <button type="submit">{form.id ? "Atualizar" : "Adicionar"}</button>
          </form>
        </div>
        {/* Coluna direita: Editar/Remover produtos */}
        <div className={styles.editColumn}>
          <h3>Editar ou Remover</h3>
          <ul className={styles.editList}>
            {products.map(product => (
              <li key={product.id} className={styles.editItem}>
                <div>
                  <strong>{product.title}</strong> - R$ {product.price}
                  <br />
                  <small>{product.description}</small>
                </div>
                <div className={styles.actionBox}>
                  <button
                    className={styles.actionButton}
                    onClick={() => handleEdit(product)}
                  >
                    Editar
                  </button>
                  <button
                    className={styles.actionButton}
                    onClick={() => handleRemove(product.id)}
                  >
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
