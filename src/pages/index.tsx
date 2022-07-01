import { useEffect, useRef } from "react";
import Head from "../../node_modules/next/head";
import About from "../components/about/about";

import Header from "../components/header/header";
import Home from "../components/home/home";
import Interdicted from "../components/interdicted/interdicted";

export default function Main() {
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      if (cursorRef.current) {
        cursorRef.current.setAttribute(
          "style",
          "top: " + (e.pageY - 4) + "px; left: " + (e.pageX - 4) + "px;"
        );
      }
    });

    document.addEventListener("mousedown", () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add("expand");

        setTimeout(() => {
          cursorRef.current.classList.remove("expand");
        }, 500);
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Diogo Izele</title>
      </Head>
      <Interdicted />
      <Header />
      <main>
        <Home />
        <About />
      </main>
      <div className="cursor" ref={cursorRef} />
    </>
  );
}
