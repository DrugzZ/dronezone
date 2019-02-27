import React from "react";

import MouseIcon from "../assets/media/mouse_icon.png";
import PlayIcon from "../assets/media/play_icon.png";

import BtnComponent from "./objects/BtnComponent";

export default () => (
  <section className="hero-block">
    <div className="hero-block__wrap">
      <div className="hero-block__promo">
        <h1 className="hero-block__title heading">Film your event with us!</h1>
        <p className="hero-block__subtitle">
          Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo.{" "}
          <br /> Nunc vel nibh tempor, pharetra lectus congue, luctus orci.
        </p>
      </div>
      <div className="hero-block__buttons">
        <BtnComponent mod="primary" className="hero-block__btn">
          Ask for price
        </BtnComponent>
        <BtnComponent
          icon={PlayIcon}
          mod="transparent"
          className="hero-block__btn"
        >
          Watch video
        </BtnComponent>
      </div>
    </div>
    <div className="scroll-icon">
      <img
        src={MouseIcon}
        className="scroll-icon__icon"
        alt="scroll down icon"
      />
      <span className="scroll-icon__caption">scroll down</span>
    </div>
  </section>
);
