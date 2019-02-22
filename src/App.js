import React, { Component } from "react";
import "./App.scss";

import HeaderComponent from "./components/HeaderComponent";
import HeroComponent from "./components/HeroComponent";
import MapComponent from "./components/MapComponent";

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
        <HeaderComponent />
        <HeroComponent />
        <section className="icons-block">
          <div className="icons-block__wrap">
            <div className="icons-block__item">
              <img
                src={DroneIcon}
                alt="drone icon"
                className="icons-block__icon"
              />
              <h2 className="icons-block__title">From air</h2>
              <p className="icons-block__subtitle">
                Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu
                leo.
              </p>
            </div>
            <div className="icons-block__item">
              <img
                src={DroneTopIcon}
                alt="drone icon"
                className="icons-block__icon"
              />
              <h2 className="icons-block__title">Best drones</h2>
              <p className="icons-block__subtitle">
                Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu
                leo.
              </p>
            </div>
            <div className="icons-block__item">
              <img
                src={PropelerIcon}
                alt="propeler icon"
                className="icons-block__icon"
              />
              <h2 className="icons-block__title">Speed</h2>
              <p className="icons-block__subtitle">
                Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu
                leo.
              </p>
            </div>
            <div className="icons-block__item">
              <img
                src={ControlIcon}
                alt="controller icon"
                className="icons-block__icon"
              />
              <h2 className="icons-block__title">Long range</h2>
              <p className="icons-block__subtitle">
                Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu
                leo.
              </p>
            </div>
          </div>
          <button className="button button--blue icons-block__btn">
            Ask for price
          </button>
        </section>
        <section className="info-block">
          <div>
            <header className="info-block__header">
              <h1 className="heading info-block__title">
                Nature from the air.
              </h1>
              <p className="info-block__subtitle">
                Mauris consequat libero metus, nec ultricies sem efficitur quis.
                Integer bibendum eget metus ac accumsan. Integer sit amet lacus
                egestas, semper est quis, viverra ex.
              </p>
            </header>
            <ol className="info-block__list">
              <li className="info-block__list-item">
                Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu
                leo. Nunc vel nibh tempor, pharetra lectus congue, luctus orci.
              </li>
              <li className="info-block__list-item">
                Mauris consequat libero metus, nec ultricies sem efficitur quis.
                Integer bibendum eget metus ac accumsan.
              </li>
              <li className="info-block__list-item">
                Integer sit amet lacus egestas, semper est quis, viverra ex.
                Mauris consequat libero metus, nec ultricies sem efficitur quis.
              </li>
              <li className="info-block__list-item">
                Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu
                leo. Nunc vel nibh tempor, pharetra lectus congue, luctus orci.
              </li>
              <li className="info-block__list-item">
                Mauris consequat libero metus, nec ultricies sem efficitur quis.
                Integer bibendum eget metus ac accumsan.
              </li>
            </ol>
          </div>
          <img
            className="info-block__img"
            src={DroneImage}
            alt="dgi phantom drone"
          />
        </section>
        <section className="portfolio-block">
          <div className="portfolio-block__video">
            <button className="player-ctrl">
              <span
                role="img"
                aria-label="play icon"
                className="player-ctrl__icon"
              >
                ▶️
              </span>
            </button>
            <video src="" poster={PosterTop} className="player">
              Sorry, your browser doesn't support embedded videos, but don't
              worry, you can <a href="/about">download it</a>
              and watch it with your favorite video player!
            </video>
          </div>
          <div className="portfolio-block__descr">
            <header className="portfolio-block__header">
              <h1 className="portfolio-block__title">Nature from the air.</h1>
              <p className="portfolio-block__subtitle">
                Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu
                leo. Nunc vel nibh tempor, pharetra lectus congue, luctus orci
                nec ultricies sem efficitur quis. Integer bibendum eget metus ac
                accumsan.
              </p>
            </header>
            <button className="button button--blue portfolio-block__btn">
              Ask for price
            </button>
          </div>
          <div className="portfolio-block__descr">
            <header className="portfolio-block__header">
              <h1 className="portfolio-block__title">City from the air.</h1>
              <p className="portfolio-block__subtitle">
                Mauris consequat libero metus, nec ultricies sem efficitur quis.
                Integer bibendum eget metus ac accumsan. Integer sit amet lacus
                egestas, semper est quis, viverra ex. Pellentesque eget nunc sit
                amet urna ullamcorper fermentum et eu leo.
              </p>
            </header>
            <button className="button button--blue portfolio-block__btn">
              Ask for price
            </button>
          </div>
          <div className="portfolio-block__video">
            <button className="player-ctrl">
              <span role="img" aria-label="play" className="player-ctrl__icon">
                ▶️
              </span>
            </button>
            <video src="" poster={PosterBottom} className="player">
              Sorry, your browser doesn't support embedded videos, but don't
              worry, you can <a href="/about">download it</a>
              and watch it with your favorite video player!
            </video>
          </div>
        </section>
        <section className="newsletter-block">
          <h1 className="newsletter-block__title">
            Sign up for out newsletter
          </h1>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Email address"
              className="newsletter-form__input"
            />
            <button type="submit" className="newsletter-form__btn">
              Send
            </button>
          </form>
        </section>
        <section className="map-block">
          <MapComponent height="400" />
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
