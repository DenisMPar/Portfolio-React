import "./index.css";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { AboutMe } from "../../components/AboutMe";
import { Services } from "../../components/Services";
import { Contact } from "../../components/Contact";
import { cmsState, useGetPageData, useShowPage } from "../../hooks";
import { Proyects } from "../../components/proyects";
import { Footer } from "../../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRecoilValue } from "recoil";
import { LoaderComp } from "../../ui/loader";

//try
function Home() {
  const data = useRecoilValue(cmsState);
  useGetPageData();

  const { toggle, display } = useShowPage();
  if (data) {
    return (
      <>
        <div
          style={{
            display: `${display}`,
          }}
        >
          <Header />
          <ToastContainer />
          <Hero toggle={toggle} />
          <AboutMe />
          <Proyects></Proyects>
          <Services />
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoaderComp />
      </div>
    );
  }
}

export { Home };
