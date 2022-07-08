import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/navbar.module.css";

export const Navbar = () => {
  const { asPath, push } = useRouter();

  //   useful for #link
  console.log(asPath);

  return (
    <nav className={styles.nav}>
      <h1 onClick={() => push("/")}>Dilan Espindola</h1>
      <ul>
        <li className={asPath === "/" ? styles.activeLink : styles.noActive}>
          <Link href="/">home</Link>
        </li>
        <li
          className={asPath === "/#about" ? styles.activeLink : styles.noActive}
        >
          <Link href="/">about me</Link>
        </li>
        <li
          className={
            asPath === "/#projects" ? styles.activeLink : styles.noActive
          }
        >
          <Link href="/">projects</Link>
        </li>
        <li
          className={
            asPath === "/#contact" ? styles.activeLink : styles.noActive
          }
        >
          <Link href="/">contact me</Link>
        </li>
      </ul>
    </nav>
  );
};
