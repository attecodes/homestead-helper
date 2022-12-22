import { AppProps } from "next/app";

import { GridContainer } from "components/GridContainer";
import Navbar from "components/Navbar";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GridContainer>
      <Navbar />
      <div className="page">
        <Component {...pageProps} />
      </div>
    </GridContainer>
  );
}
