import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const MainMenu = () => {
  return (
    <>
      <nav>
        <Link to="/">Tasks</Link>
        <Link to="/add">Add</Link>
        <Link to="/help">Help</Link>
      </nav>
    </>
  );
};

export default MainMenu;
