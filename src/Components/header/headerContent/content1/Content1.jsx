import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "../HeaderContent.module.css";

const Content1 = () => {
  return (
    <section className={style.content1}>
      <div className={style.content}>
        <h3 className={style.title}>High Quality</h3>
        <h2 className={style.name}>Canabis Shop</h2>
        <p className={style.text}>
          Effects of chronic use may include bronchitis, a cannabis dependence
          syndrome, and subtle impairments of attention and memory.
        </p>
        <NavLink
          className={({ isActive }) => (isActive ? style.active : "")}
          to="/products"
        >
          <button className={style.shopBtn}>
            Shop Now
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M504.3 273.6l-112.1 104c-6.992 6.484-17.18 8.218-25.94 4.406c-8.758-3.812-14.42-12.45-14.42-21.1L351.9 288H32C14.33 288 .0002 273.7 .0002 255.1S14.33 224 32 224h319.9l0-72c0-9.547 5.66-18.19 14.42-22c8.754-3.809 18.95-2.075 25.94 4.41l112.1 104C514.6 247.9 514.6 264.1 504.3 273.6z" />
            </svg>
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default Content1;
