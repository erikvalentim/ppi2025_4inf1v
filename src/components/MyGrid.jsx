import { useEffect, useState } from "react";
import styles from "./MyGrid.module.css";

export function MyGrid() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showAsideLeft = width >= 768;
  const showAsideRight = width >= 1200;
  const showHeader2 = width >= 768;
  const showFooter2 = width >= 768;

  return (
    <div className={styles.container}>
      <header className={styles.header1}>Header 1</header>
      {showHeader2 && <header className={styles.header2}>Header 2</header>}
      {showAsideLeft && <aside className={styles.asideLeft}>Aside Esquerdo</aside>}
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Título 1</h2>
            <p>Descrição do card 1</p>
          </div>
          <div className={styles.card}>
            <h2>Título 2</h2>
            <p>Descrição do card 2</p>
          </div>
          <div className={styles.card}>
            <h2>Título 3</h2>
            <p>Descrição do card 3</p>
          </div>
          <div className={styles.card}>
            <h2>Título 4</h2>
            <p>Descrição do card 4</p>
          </div>
        </div>
      </main>
      {showAsideRight && <aside className={styles.asideRight}>Aside Direito</aside>}
      <footer className={styles.footer1}>Footer 1</footer>
      {showFooter2 && <footer className={styles.footer2}>Footer 2</footer>}
    </div>
  );
}
