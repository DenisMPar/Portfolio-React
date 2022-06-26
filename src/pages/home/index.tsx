import React, { useState } from "react";
import "./index.css";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { AboutMe } from "../../components/AboutMe";
import { Services } from "../../components/Services";
import { Contact } from "../../components/Contact";
import { useGetPageData, useShowPage } from "../../hooks";
import { Proyects } from "../../components/proyects";
import { Footer } from "../../components/Footer";

//try
function Home() {
  useGetPageData();
  const { toggle, display } = useShowPage();

  return (
    <>
      <div
        style={{
          display: `${display}`,
        }}
      >
        <Header />
        <Hero toggle={toggle}></Hero>
        <AboutMe />
        <Proyects></Proyects>
        <Services />
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}

export { Home };
