import React from "react";

import DroneImage from "../assets/media/drone_img.jpg";

export default () => {
  const itemsContent = [
    "Pellentesque eget nunc sit amet urna ullamcorper fermentum et euleo. Nunc vel nibh tempor, pharetra lectus congue, luctus orci.",
    "Mauris consequat libero metus, nec ultricies sem efficitur quis. Integer bibendum eget metus ac accumsan.",
    "Integer sit amet lacus egestas, semper est quis, viverra ex. Mauris consequat libero metus, nec ultricies sem efficitur quis.",
    "Pellentesque eget nunc sit amet urna ullamcorper fermentum et euleo. Nunc vel nibh tempor, pharetra lectus congue, luctus orci.",
    "Mauris consequat libero metus, nec ultricies sem efficitur quis. Integer bibendum eget metus ac accumsan."
  ];

  const items = itemsContent.map((item, i) => (
    <li key={i} className="info-block__list-item">
      {item}
    </li>
  ));

  return (
    <section className="info-block">
      <header className="info-block__header">
        <h1 className="info-block__title">Nature from the air.</h1>
        <p className="info-block__subtitle">
          Mauris consequat libero metus, nec ultricies sem efficitur quis.
          Integer bibendum eget metus ac accumsan. Integer sit amet lacus
          egestas, semper est quis, viverra ex.
        </p>
      </header>
      <img
        className="info-block__img"
        src={DroneImage}
        alt="dgi phantom drone"
      />
      <ol className="info-block__list">{items}</ol>
    </section>
  );
};
