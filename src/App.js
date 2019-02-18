import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="header__logo">
            Drone<span className="header__logo--light">Zone</span>
          </div>
          <nav className="main-nav">
            <a href="/Home" className="main-nav__link">
              Home
            </a>
            <a href="/Home" className="main-nav__link">
              About
            </a>
            <a href="/Home" className="main-nav__link">
              Pricing
            </a>
            <a href="/Home" className="main-nav__link">
              Our drones
            </a>
            <a href="/Home" className="main-nav__link">
              Our realizations
            </a>
            <a href="/Home" className="main-nav__link">
              Contact
            </a>
          </nav>
        </header>
        <section className="hero-section">
          <div className="hero-section__content">
            <div className="hero-section__slogan">
              <h1>Film your event with us!</h1>
              <p>
                Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu
                leo.
              </p>
              <p>Nunc vel nibh tempor, pharetra lectus congue, luctus orci. </p>
            </div>
            <div className="hero-section__buttons">
              <button className="main-button">Ask for price</button>
              <button className="main-button main-button--transparent">
                Watch video
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
