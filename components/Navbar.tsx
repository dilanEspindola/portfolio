import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import styles from "../styles/navbar.module.css";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [handleModal, setHandleModal] = useState(false);
  const { asPath, push } = useRouter();

  //   useful for #link
  // console.log(asPath);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(
        window.matchMedia("only screen and (max-width: 500px)").matches
      );
    });
  }, []);

  const openModal = () => {
    setHandleModal(true);
  };

  const closeModal = () => {
    setHandleModal(false);
  };

  if (!isMobile) {
    return (
      <nav className={styles.nav}>
        <h1 onClick={() => push("/")}>Dilan Espindola</h1>
        <ul>
          <li className={asPath === "/" ? styles.activeLink : styles.noActive}>
            <Link href="/">home</Link>
          </li>
          <li
            className={
              asPath === "/#about" ? styles.activeLink : styles.noActive
            }
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
  }
  return (
    <nav className={styles.nav}>
      <span onClick={openModal}>
        <MenuIcon className="" />
      </span>
      <Drawer open={handleModal} onClose={closeModal}>
        <h1 onClick={() => push("/")}>Dilan Espindola</h1>
        <ul>
          <li className={asPath === "/" ? styles.activeLink : styles.noActive}>
            <Link href="/">home</Link>
          </li>
          <li
            className={
              asPath === "/#about" ? styles.activeLink : styles.noActive
            }
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
      </Drawer>
    </nav>
  );
};
