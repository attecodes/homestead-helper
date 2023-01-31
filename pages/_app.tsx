import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

import Navbar from "components/Navbar";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 lg:px-0">
        <Toaster position="bottom-right" />
        <Component {...pageProps} className="text-red-200" />
      </div>
    </>
  );
}
