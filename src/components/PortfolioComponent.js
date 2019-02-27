import React from "react";

import PlayerComponent from "./objects/PlayerComponent";
import BtnComponent from "./objects/BtnComponent";

import TestVideo from "../assets/media/dev-vid.mp4";
import PosterTop from "../assets/media/caption1_img.jpg";
import PosterBottom from "../assets/media/caption2_img.jpg";

export default () => {
  return (
    <section className="portfolio-block">
      <div className="portfolio-block__video">
        <PlayerComponent video={TestVideo} poster={PosterTop} />
      </div>
      <div className="portfolio-block__descr">
        <header className="portfolio-block__header">
          <h1 className="portfolio-block__title">Nature from the air.</h1>
          <p className="portfolio-block__subtitle">
            Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu
            leo. Nunc vel nibh tempor, pharetra lectus congue, luctus orci nec
            ultricies sem efficitur quis. Integer bibendum eget metus ac
            accumsan.
          </p>
        </header>
        <BtnComponent mod="blue" className="portfolio-block__btn">
          Ask for price
        </BtnComponent>
      </div>
      <div className="portfolio-block__descr portfolio-block__descr--bottom">
        <header className="portfolio-block__header">
          <h1 className="portfolio-block__title">City from the air.</h1>
          <p className="portfolio-block__subtitle">
            Mauris consequat libero metus, nec ultricies sem efficitur quis.
            Integer bibendum eget metus ac accumsan. Integer sit amet lacus
            egestas, semper est quis, viverra ex. Pellentesque eget nunc sit
            amet urna ullamcorper fermentum et eu leo.
          </p>
        </header>
        <BtnComponent mod="blue" className="portfolio-block__btn">
          Ask for price
        </BtnComponent>
      </div>
      <div className="portfolio-block__video portfolio-block__video--bottom">
        <PlayerComponent video={TestVideo} poster={PosterBottom} />
      </div>
    </section>
  );
};
