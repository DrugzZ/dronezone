import React from "react";

export default () => (
  <section className="newsletter-block">
    <h1 className="newsletter-block__title">Sign up for our newsletter</h1>
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
);
