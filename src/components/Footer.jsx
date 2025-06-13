import styles from "./MyGrid.module.css";
import { Github } from "lucide-react";



export function Footer() {
  return (
    <footer className={styles.footer1}>

      <div className={styles.containerCourse}>
        <p>IFRN CAMPUS MACAU</p>
        <p>CURSO TECNICO EM INFORMATICA</p>
        <p>PROGRAMAÇÃO PARA INTERNET</p>
      </div>

      <div className={styles.containerName}>
        WESLEY BARROS PEREIRA
      </div>

      <div className={styles.containerIcons}>
        <Github />
      </div>


    </footer>
  );
}