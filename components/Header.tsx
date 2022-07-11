import { Navbar } from "./Navbar";

import styles from "../styles/header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <div className="">
        <div className={styles.shape}>
          <div className={styles.flash}></div>
        </div>
        <div className={styles.title}>
          <div className="animate__animated animate__zoomIn">
            <h1>
              <span className={styles.name}>
                <span>Dilan</span>
                <span>Espindola</span>
              </span>
              <span className={styles.profession}>
                <span>Web</span>
                <span>Developer</span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};
