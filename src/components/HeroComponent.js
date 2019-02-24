import React from "react";
import MouseIcon from "../assets/media/mouse_icon.png";
import PlayIcon from "../assets/media/play_icon.png";

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
        <button className="button hero-block__btn">Ask for price</button>
        <button className="button button--withIcon">
          <img src={PlayIcon} alt="Play Icon" className="button__icon" />
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
      <span className="scroll-icon__caption">scroll down</span>
    </div>
  </section>
);
