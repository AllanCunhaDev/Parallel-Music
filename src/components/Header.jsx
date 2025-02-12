import React from "react";
import logoParallel from "../assets/comment-alt-music_10434581.svg";

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img className="logo" src={logoParallel} alt="Logo" />
      </a>
      <a className="header_link" href="/">
        <h1>Parallel Music</h1>
      </a>
    </div>
  );
};
export default Header;
