import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";

export function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Simula registro
    navigate("/home");
  }

  return (
    <div className={styles.container}>
      <h2>Registro</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Nome:
          <input value={nome} onChange={e => setNome(e.target.value)} required />
        </label>
        <label>
          E-mail:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label>
          Senha:
          <input type="password" value={senha} onChange={e => setSenha(e.target.value)} required />
        </label>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}