import React, { Component } from "react";
import "./App.css";

import MouseIcon from "./assets/media/mouse_icon.png";
import DroneIcon from "./assets/media/drone_icon.png";
import DroneTopIcon from "./assets/media/drone1_icon.png";
import PropelerIcon from "./assets/media/propeler_icon.png";
import ControlIcon from "./assets/media/control_icon.png";

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
                <span
                  role="img"
                  aria-label="play"
                  className="main-button__icon"
                >
                  ▶️
                </span>
                Watch video
              </button>
            </div>
          </div>
          <div className="scroll-icon">
            <img
              src={MouseIcon}
              className="scroll-icon__icon"
              alt="scroll down icon"
            />
            <span className="scroll-icon__text">scroll down</span>
          </div>
        </section>
        <section className="icons-section">
          <div className="icons-block">
            <div className="icon-block">
              <img src={DroneIcon} alt="icon" className="icon-block__icon" />
              <h2 className="icon-block__title">From air</h2>
              <p className="icon-block__caption">
                Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu
                leo.
              </p>
            </div>
            <div className="icon-block">
              <img src={DroneTopIcon} alt="icon" className="icon-block__icon" />
              <h2 className="icon-block__title">Best drones</h2>
              <p className="icon-block__caption">
                Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu
                leo.
              </p>
            </div>
            <div className="icon-block">
              <img src={PropelerIcon} alt="icon" className="icon-block__icon" />
              <h2 className="icon-block__title">Speed</h2>
              <p className="icon-block__caption">
                Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu
                leo.
              </p>
            </div>
            <div className="icon-block">
              <img src={ControlIcon} alt="icon" className="icon-block__icon" />
              <h2 className="icon-block__title">Long range</h2>
              <p className="icon-block__caption">
                Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu
                leo.
              </p>
            </div>
          </div>
          <button className="main-button main-button--blue">
            Ask for price
          </button>
        </section>
      </div>
    );
  }
}

export default App;
