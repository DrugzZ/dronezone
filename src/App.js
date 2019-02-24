import React, { Component } from "react";
import "./App.scss";

import HeaderComponent from "./components/HeaderComponent";
import HeroComponent from "./components/HeroComponent";
import MapComponent from "./components/MapComponent";
import IconsComponent from "./components/IconsComponent";
import InfoComponent from "./components/InfoComponent";
import PortfolioComponent from "./components/PortfolioComponent";
import NewsletterComponent from "./components/NewsletterComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <HeroComponent />
        <IconsComponent />
        <InfoComponent />
        <PortfolioComponent />
        <NewsletterComponent />
        <section className="map-block">
          <MapComponent height="500" />
        </section>
        <section className="footer-block">
          <h2 style={{ color: "black", textAlign: "center", height: "200px" }}>
            This is the footer section
          </h2>
        </section>
      </div>
    );
  }
}

export default App;
