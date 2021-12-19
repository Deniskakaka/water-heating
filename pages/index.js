import { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";

export default function Home() {

  return (
    <section style={{display: 'flex', flexDirection: 'column', height:'100vh', justifyContent: 'space-between'}}>
      <Header />
      <Main/>
      <Footer />
    </section>
  )
}
