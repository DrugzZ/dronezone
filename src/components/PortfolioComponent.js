import React from "react";

import PlayIcon from "../assets/media/play_icon.png";

import PosterTop from "../assets/media/caption1_img.jpg";
import PosterBottom from "../assets/media/caption2_img.jpg";

export default () => (
  <section className="portfolio-block">
    <div className="portfolio-block__video">
      <video src="" poster={PosterTop} className="player">
        Sorry, your browser doesn't support embedded videos, but don't worry,
        you can <a href="/about">download it</a>
        and watch it with your favorite video player!
      </video>
      <button className="player__ctrl">
        <img src={PlayIcon} alt="Play Icon" className="player__icon" />
      </button>
    </div>
    <div className="portfolio-block__descr">
      <header className="portfolio-block__header">
        <h1 className="portfolio-block__title">Nature from the air.</h1>
        <p className="portfolio-block__subtitle">
          Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo.
          Nunc vel nibh tempor, pharetra lectus congue, luctus orci nec
          ultricies sem efficitur quis. Integer bibendum eget metus ac accumsan.
        </p>
      </header>
      <button className="button button--blue portfolio-block__btn">
        Ask for price
      </button>
    </div>
    <div className="portfolio-block__descr portfolio-block__descr--bottom">
      <header className="portfolio-block__header">
        <h1 className="portfolio-block__title">City from the air.</h1>
        <p className="portfolio-block__subtitle">
          Mauris consequat libero metus, nec ultricies sem efficitur quis.
          Integer bibendum eget metus ac accumsan. Integer sit amet lacus
          egestas, semper est quis, viverra ex. Pellentesque eget nunc sit amet
          urna ullamcorper fermentum et eu leo.
        </p>
      </header>
      <button className="button button--blue portfolio-block__btn">
        Ask for price
      </button>
    </div>
    <div className="portfolio-block__video portfolio-block__video--bottom">
      <video src="" poster={PosterBottom} className="player">
        Sorry, your browser doesn't support embedded videos, but don't worry,
        you can <a href="/about">download it</a>
        and watch it with your favorite video player!
      </video>
      <button className="player__ctrl">
        <img src={PlayIcon} alt="Play Icon" className="player__icon" />
      </button>
    </div>
  </section>
);
