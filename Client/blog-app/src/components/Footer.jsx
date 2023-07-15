import React from "react";
import Logo from "../img/RIFF3.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Logo} alt="" />
      <span>
        Made with ♥️ and <b>React.js</b> in SF CA.
      </span>
    </div>
  );
};

export default Footer;
