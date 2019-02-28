import React from "react";

export default ({ icon = "", mod = "", ...props }) => {
  return (
    <button
      className={`button ${props.className} ${mod && `button--${mod}`} ${icon &&
        "button--withIcon"}`}
    >
      {icon && <img src={icon} alt="Button Icon" className="button__icon" />}
      {props.children}
    </button>
  );
};
