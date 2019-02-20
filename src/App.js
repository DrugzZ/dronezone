import React, { Component } from "react";
import "./App.css";

import MouseIcon from "./assets/media/mouse_icon.png";
import DroneIcon from "./assets/media/drone_icon.png";
import DroneTopIcon from "./assets/media/drone1_icon.png";
import PropelerIcon from "./assets/media/propeler_icon.png";
import ControlIcon from "./assets/media/control_icon.png";
import DroneImage from "./assets/media/drone_img.jpg";
import PosterTop from "./assets/media/caption1_img.jpg";
import PosterBottom from "./assets/media/caption2_img.jpg";

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
        <section className="info-section">
          <div className="info-section__content">
            <header className="info-section__header">
              <h1>Nature from the air.</h1>
              <p>
                Mauris consequat libero metus, nec ultricies sem efficitur quis.
                Integer bibendum eget metus ac accumsan. Integer sit amet lacus
                egestas, semper est quis, viverra ex.
              </p>
            </header>
            <ol className="info-section__list">
              <li className="info-section__list-item">
                Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu
                leo. Nunc vel nibh tempor, pharetra lectus congue, luctus orci.
              </li>
              <li className="info-section__list-item">
                Mauris consequat libero metus, nec ultricies sem efficitur quis.
                Integer bibendum eget metus ac accumsan.
              </li>
              <li className="info-section__list-item">
                Integer sit amet lacus egestas, semper est quis, viverra ex.
                Mauris consequat libero metus, nec ultricies sem efficitur quis.
              </li>
              <li className="info-section__list-item">
                Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu
                leo. Nunc vel nibh tempor, pharetra lectus congue, luctus orci.
              </li>
              <li className="info-section__list-item">
                Mauris consequat libero metus, nec ultricies sem efficitur quis.
                Integer bibendum eget metus ac accumsan.
              </li>
            </ol>
          </div>
          <img src={DroneImage} alt="dgi phantom drone" />
        </section>
        <section className="portfolio-section">
          <div className="portfolio-section__video">
            <button className="portfolio-section__video-controller">
              <span
                role="img"
                aria-label="play"
                style={{ "padding-left": "3px" }}
              >
                ▶️
              </span>
            </button>
            <video src="" poster={PosterTop}>
              Sorry, your browser doesn't support embedded videos, but don't
              worry, you can <a href="/about">download it</a>
              and watch it with your favorite video player!
            </video>
          </div>
          <div className="portfolio-section__description">
            <header className="info-section__header">
              <h1>Nature from the air.</h1>
              <p>
                Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu
                leo. Nunc vel nibh tempor, pharetra lectus congue, luctus orci
                nec ultricies sem efficitur quis. Integer bibendum eget metus ac
                accumsan.
              </p>
            </header>
            <button className="main-button main-button--blue1">
              Ask for price
            </button>
          </div>
          <div className="portfolio-section__description">
            <header className="info-section__header">
              <h1>City from the air.</h1>
              <p>
                Mauris consequat libero metus, nec ultricies sem efficitur quis.
                Integer bibendum eget metus ac accumsan. Integer sit amet lacus
                egestas, semper est quis, viverra ex. Pellentesque eget nunc sit
                amet urna ullamcorper fermentum et eu leo.
              </p>
            </header>
            <button className="main-button main-button--blue1">
              Ask for price
            </button>
          </div>
          <div className="portfolio-section__video">
            <button className="portfolio-section__video-controller">
              <span
                role="img"
                aria-label="play"
                style={{ "padding-left": "3px" }}
              >
                ▶️
              </span>
            </button>
            <video src="" poster={PosterBottom}>
              Sorry, your browser doesn't support embedded videos, but don't
              worry, you can <a href="/about">download it</a>
              and watch it with your favorite video player!
            </video>
          </div>
        </section>
        <section className="newsletter-section">
          <h1 className="newsletter-section__heading">
            Sign up for out newsletter
          </h1>
          <form className="newsletter-section__form">
            <input
              type="email"
              placeholder="Email address"
              className="newsletter-section__form-input"
            />
            <button type="submit" className="newsletter-section__form-btn">
              Send
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default App;
