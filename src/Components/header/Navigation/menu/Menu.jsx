import React, { useState } from "react";
import style from "./Menu.module.css";

const Menu = () => {
  const [page, setPage] = useState("home");

  const pageActiveHandler = (e) => {
    setPage(e);
  };

  return (
    <ul className={style.List}>
      <li className={style.meniItem}>
        <a href="#">
          <div className={style.menuCircle}></div>Home
        </a>
      </li>
      <li className={`${style.meniItem} ${style.galleryLink}`}>
        <a href="#">
          <div className={style.menuCircle}></div>Our Products
        </a>
      </li>
      {/* <li className={style.meniItem}>
        <a href="#">
          <div className={style.menuCircle}></div>Gallery
        </a>
      </li> */}
      <li className={style.meniItem}>
        <a href="#">
          <div className={style.menuCircle}></div>Contact
        </a>
      </li>
    </ul>
  );
};

export default Menu;
