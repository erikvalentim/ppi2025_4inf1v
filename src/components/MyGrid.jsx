import { useEffect, useState } from "react";
import styles from "./MyGrid.module.css";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

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
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
