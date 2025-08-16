import styles from "./Footer.module.css";
import { Github, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className={styles.footer1}>


      <div className={styles.containerIF}>
        <p>IFRN CAMPUS MACAU</p>
        <p>CURSO TECNICO EM INFORMATICA</p>
        <p>PROGRAMAÇÃO PARA INTERNET</p>
      </div>

      <div className={styles.containerName}>
        ERIK HENRIQUE DE MELO NASCIMENTO
      </div>


      <div className={styles.iconsCard}>
        <div className={styles.containerIcons}>
          <a href="https://github.com/erikvalentim" target="_blank" rel="noopener noreferrer">
            <Github size={20} color="#06a555" />
          </a>
          <a href="https://www.instagram.com/erik_valentim9/" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} color="#06a555" />
          </a>
          <a href="https://x.com/9Edimjr" target="_blank" rel="noopener noreferrer">
            <Facebook size={20} color="#06a555" />
          </a>
        </div>
      </div>
    </footer>
  );
}