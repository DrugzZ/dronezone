import React from "react";

export default ({ icon = "", mod = null, ...props }) => {
  return (
    <button
      className={`button ${props.className} ${
        mod ? `button--${mod}` : ""
      } ${icon && "button--withIcon"}`}
    >
      {icon ? (
        <img src={icon} alt="Play Icon" className="button__icon" />
      ) : null}
      {props.children}
    </button>
  );
};
