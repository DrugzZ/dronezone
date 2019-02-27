import React from "react";

import BtnComponent from "./objects/BtnComponent";

export default () => (
  <section className="newsletter-block">
    <h1 className="newsletter-block__title">Sign up for our newsletter</h1>
    <form className="newsletter-form">
      <input
        type="email"
        placeholder="Email address"
        className="newsletter-form__input"
      />
      <BtnComponent
        type="submit"
        mod="primary"
        className="newsletter-form__btn"
      >
        Send
      </BtnComponent>
    </form>
  </section>
);
