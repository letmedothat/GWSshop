import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Menu.module.css";

const Menu = () => {
  return (
    <ul className={style.List}>
      <li className={style.meniItem}>
        <NavLink
          className={({ isActive }) => (isActive ? style.active : "")}
          to="/"
        >
          Home <div className={style.menuCircle}></div>
        </NavLink>
      </li>
      <li className={`${style.meniItem} ${style.galleryLink}`}>
        <NavLink
          className={({ isActive }) => (isActive ? style.active : "")}
          to="/products"
        >
          Our Products <div className={style.menuCircle}></div>
        </NavLink>
      </li>
      <li className={style.meniItem}>
        <NavLink
          className={({ isActive }) => (isActive ? style.active : "")}
          to="/contact"
        >
          Contact <div className={style.menuCircle}></div>
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
