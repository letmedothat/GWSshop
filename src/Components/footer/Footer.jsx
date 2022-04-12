import React from "react";
import logo from "../../assets/logo1.jpg";
import litecoin from "../../assets/litecoin.png";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <section className={style.logo}>
        <article className={style.logoImg}>
          <img src={logo} alt="logo" />
          <h1>GWSShop</h1>
        </article>

        <div className={style.logoTitle}>
          <p>
            Medical cannabis can be administered through various methods,
            including capsules, lozenges, tinctures, dermal patches.
          </p>
        </div>
        <div className={style.ltc}>
          <img src={litecoin} alt="ltc" />
        </div>
      </section>
      <section className={style.contact}>
        <h2>Contact Us:</h2>
        <p>
          Telegram : <a>Click Me!</a>
        </p>
      </section>
    </div>
  );
};

export default Footer;
