import { useState } from "react";
import styles from "./LuckyNumber.module.css";

export function LuckyNumber() {
  const [luckyNumber, setLuckyNumber] = useState(0);
  const [NuSorteados, setNuSorteados] = useState([]);
  const [massageUser, setMassageUser] = useState("");

  function handleClick() {
    const newNumber = Math.ceil(Math.random() * 31);
    if (NuSorteados.includes(newNumber)) {
      setMassageUser("Já foi sorteado!");
    } else {
      setLuckyNumber(newNumber);
      setNuSorteados([...NuSorteados, newNumber]);
      setMassageUser("");
    }
  }

  return (
    <div className={styles.container}>
      <h1>
        {luckyNumber ? `Lucky Number = ${luckyNumber}` : "Lucky Number 🎲!"}
      </h1>
      <button className={styles.button} onClick={handleClick}>
        I'm Feeling Lucky!
      </button>
      {massageUser && <p style={{ color: "red", marginTop: "1rem" }}>{massageUser}</p>}
      {NuSorteados.length > 0 && (
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <strong>Números sorteados:</strong>
          <div>{NuSorteados.join(", ")}</div>
        </div>
      )}
    </div>
  );
}
