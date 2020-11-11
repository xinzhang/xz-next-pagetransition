import Head from "next/head";
import styles from "../styles/Home.module.css";
import navs from "../styles/Nav.module.css";
import { AnimateSharedLayout } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <div className={navs.head}>
          <a className={navs.logo}>
            <img src="/logo.svg"></img>
          </a>
          <ul className={navs.menu}>
            <li className={navs.menuItem}>
              <a href="#" className={navs.menuLink}>
                Home
              </a>
            </li>
            <li className={navs.menuItem}>
              <a href="#" className={navs.menuLink}>
                Service
              </a>
            </li>
            <li className={navs.menuItem}>
              <a href="#" className={navs.menuLink}>
                About
              </a>
            </li>
            <li className={navs.menuItem}>
              <a href="#" className={navs.menuLink}>
                Contact us
              </a>
            </li>
          </ul>
          <div className={navs.actions}>
            <img src="/profile.svg" className={navs.profile}></img>
          </div>
        </div>
      </Head>

      <main className={styles.main}>
        {["car", "headphone", "shoe"].map((product) => (
          <div className={styles["product-container"]}>
            <h3>{product}</h3>
            <a href={`/${product}`}>
              <img
                className={styles["product-img"]}
                src={`/images/${product}.jpg`}
              />
            </a>
          </div>
        ))}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
}
