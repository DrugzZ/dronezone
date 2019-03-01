import React, { lazy, Suspense, useState, useEffect } from "react";
import "./App.scss";

import HeaderComponent from "./components/HeaderComponent";
import HeroComponent from "./components/HeroComponent";
import IconsComponent from "./components/IconsComponent";
import InfoComponent from "./components/InfoComponent";
import PortfolioComponent from "./components/PortfolioComponent";
import NewsletterComponent from "./components/NewsletterComponent";

import { ReactComponent as Loading } from "./assets/media/loading.svg";

const MapComponent = lazy(() => import("./components/MapComponent"));

export default () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrolled) setScrolled(true);
    };
    window.addEventListener("scroll", handleScroll, true);
    return window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div onTouchStart={() => setScrolled(true)} className="App">
      <HeaderComponent />
      <HeroComponent />
      <IconsComponent />
      <InfoComponent />
      <PortfolioComponent />
      <NewsletterComponent />
      <Suspense fallback={<Loading />}>
        {scrolled && <MapComponent height="500" />}
      </Suspense>
      <section className="footer-block">
        <h2
          style={{
            color: "black",
            textAlign: "center",
            height: "200px",
            padding: "2rem"
          }}
        >
          This is the footer section
        </h2>
      </section>
    </div>
  );
};
