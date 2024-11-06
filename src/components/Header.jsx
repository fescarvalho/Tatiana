import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({
  previousRouter,
  previousTitle,
  nextRouter,
  nextTitle,
}) => {
  return (
    <div className="header">
      <Link to={previousRouter}>{previousTitle}</Link>
      <Link to="/">Início</Link>
      <Link to={nextRouter}>{nextTitle}</Link>
    </div>
  );
};

export default Header;
