import React from "react";
import logo from "../../../assets/logo1.jpg";
import style from "./Logo.module.css";
import icon1 from "../../../assets/headerIcon.png";
import icon2 from "../../../assets/headerIcon1.png";
import icon3 from "../../../assets/headerIcon2.png";

const Logo = () => {
  return (
    <div className={style.LogoSection}>
      <section className={style.logo}>
        <img src={logo} alt="logo" />
        <div className={style.logoTitle}>
          <h1>GWSShop</h1>
          <p>Premium Canabis Shop</p>
        </div>
      </section>
      <section className={style.iconList}>
        <div className={style.iconitem}>
          <img src={icon1} alt="icon1" />
          <div className={style.itemText}>
            <p>High Quality</p>
            <p>Medical Standart</p>
          </div>
        </div>
        <div className={style.iconitem}>
          <img src={icon2} alt="icon2" />
          <div className={style.itemText}>
            <p>Satisfaction</p>
            <p>Quality product guarantee</p>
          </div>
        </div>
        <div className={style.iconitem}>
          <img src={icon3} alt="icon3" />
          <div className={style.itemText}>
            <p>Fast Answer</p>
            <p>Good Address</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logo;
