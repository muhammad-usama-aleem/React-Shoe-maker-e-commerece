import React from "react";
const Banner = ({ children, title, subtitle }) => {
  return (
    <div className="banner">
      <h1 className="banner-font">{title}</h1>
      <div />
      <p className="subtitle">{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;