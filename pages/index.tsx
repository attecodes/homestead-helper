// import Head from "next/head";
// import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });

import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>Dewindt Farms</title>
        <meta name="description" content="Dewindt Farms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <h1>Welcome to Dewindt Farms</h1>
      <button className={styles.button}>Buy Chicken</button>
    </div>
  );
}
