import React from "react";
//component- function that returns html
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        alt="anonymous"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1200px-Anonymous_emblem.svg.png"
      />
    </header>
  );
};

export default Header;
