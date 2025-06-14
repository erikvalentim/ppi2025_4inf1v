import styles from "./Header.module.css";
import { TrendingUp } from "lucide-react";

export function Header() {
  return (
    <header className={styles.header1}>
      <TrendingUp size={44} color="#0a9608" />
      <div>
        <h1 className={styles.headerTitle}>Motivação Diária</h1>
        <p className={styles.headerSlogan}>Acredite no seu potencial!</p>
      </div>
    </header>
  );
}