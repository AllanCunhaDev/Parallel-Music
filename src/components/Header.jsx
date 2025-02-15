import React from "react";
import { Link } from "react-router-dom";
import logoParallel from "../assets/logo/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logoParallel} alt="Logo" />
      </Link>
      <Link to="/" className="header_link" >
        <h1>Parallel Music</h1>
      </Link>
    </div>
  );
};
export default Header;
