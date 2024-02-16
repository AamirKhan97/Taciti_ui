import React, { useEffect } from "react";
import Layout from "../component/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/globals.css';








export default function App({ Component, pageProps }) {


  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    //Fixed header scroll code

  });
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}