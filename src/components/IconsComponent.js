import React from "react";

import BtnComponent from "./objects/BtnComponent";

import DroneIcon from "../assets/media/drone_icon.png";
import DroneTopIcon from "../assets/media/drone1_icon.png";
import PropelerIcon from "../assets/media/propeler_icon.png";
import ControlIcon from "../assets/media/control_icon.png";

export default () => {
  const blocksContent = [
    {
      title: "From air",
      subtitle:
        "Pellentesque eget nunc sit amet urna ullamcorper fermentum et euleo.",
      img: DroneIcon
    },
    {
      title: "Best drones",
      subtitle:
        "Pellentesque eget nunc sit amet urna ullamcorper fermentum et euleo.",
      img: DroneTopIcon
    },
    {
      title: "Speed",
      subtitle:
        "Pellentesque eget nunc sit amet urna ullamcorper fermentum et euleo.",
      img: PropelerIcon
    },
    {
      title: "Long range",
      subtitle:
        "Pellentesque eget nunc sit amet urna ullamcorper fermentum et euleo.",
      img: ControlIcon
    }
  ];

  const blocks = blocksContent.map((block, i) => (
    <div key={i} className="icons-block__item">
      <img src={block.img} alt="drone icon" className="icons-block__icon" />
      <h2 className="icons-block__title">{block.title}</h2>
      <p className="icons-block__subtitle">{block.subtitle}</p>
    </div>
  ));

  return (
    <section className="icons-block">
      <div className="icons-block__wrap">{blocks}</div>
      <BtnComponent mod="blue" className="icons-block__btn">
        Ask for price
      </BtnComponent>
    </section>
  );
};
