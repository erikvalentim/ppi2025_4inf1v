import styles from "./MyGrid.module.css";

export function Header() {
  return (
    <header className={styles.header1}>
      <img src="https://picsum.photos/50" alt="Ícone" className={styles.headerIcon} />
      <div>
        <h1 className={styles.headerTitle}>Motivação Diária</h1>
        <p className={styles.headerSlogan}>Acredite no seu potencial!</p>
      </div>
    </header>
  );
}