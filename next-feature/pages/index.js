import NavBar from "../Components/Navbar/NavBar";
import Head from "next/head";
import { deleteCookie, getCookie, hasCookie, setCookie } from "cookies-next";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    setCookie("key", "value", {
      maxAge: 60 * 24 * 24,
      domain: `.${window.location.hostname}`,
    });
  }, []);
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="next js tutorial" />
        <meta name="author" content="Jay popatbhai vaghani" />
      </Head>
      <NavBar />
    </>
  );
}
