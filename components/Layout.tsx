import Head from "next/head";
import { Header } from "./Header";

import styles from "../styles/Home.module.css";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Dilan Espindola | Web Developer</title>
      </Head>
      <div className={styles.body}>
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};
